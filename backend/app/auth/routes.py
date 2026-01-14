from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import SessionLocal
from ..models import User
from ..schemas import SignupSchema, LoginSchema, ForgotPasswordSchema, VerifyOtpSchema
from ..utils import hash_password, verify_password
from .jwt_handler import create_access_token
from .otp import generate_otp

router = APIRouter(prefix="/auth", tags=["Auth"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ------------------ Signup -------------------------
@router.post("/signup")
def signup(user: SignupSchema, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    otp_value = generate_otp()

    new_user = User(
        email=user.email,
        password=hash_password(user.password),
        otp=otp_value
    )
    db.add(new_user)
    db.commit()

    # Here you will send OTP to email
    print("OTP sent:", otp_value)

    return {"message": "Signup successful. Please verify OTP sent to your email."}


# ------------------ OTP Verification -------------------------
@router.post("/verify-otp")
def verify_otp(data: VerifyOtpSchema, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.otp != data.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")

    user.is_verified = True
    user.otp = None
    db.commit()

    return {"message": "OTP Verified Successfully"}


# ------------------ Login -------------------------
@router.post("/login")
def login(data: LoginSchema, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()

    if not user or not verify_password(data.password, user.password):
        raise HTTPException(status_code=400, detail="Invalid Credentials")

    if not user.is_verified:
        raise HTTPException(status_code=403, detail="Email not verified")

    token = create_access_token({"sub": user.email, "role": user.role})
    return {"access_token": token, "token_type": "bearer"}


# ------------------ Forgot Password -------------------------
@router.post("/forgot-password")
def forgot_password(data: ForgotPasswordSchema, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="Email not found")

    otp_value = generate_otp()
    user.otp = otp_value
    db.commit()

    # you will send OTP to email
    print("Password Reset OTP:", otp_value)

    return {"message": "Password reset OTP sent to your email."}
