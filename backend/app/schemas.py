from pydantic import BaseModel, EmailStr
from typing import Optional, List

class SignupSchema(BaseModel):
    email: EmailStr
    password: str

class LoginSchema(BaseModel):
    email: EmailStr
    password: str

class ForgotPasswordSchema(BaseModel):
    email: EmailStr

class VerifyOtpSchema(BaseModel):
    email: EmailStr
    otp: str


# Admin / product schemas
class CategoryCreate(BaseModel):
    name: str

class CategoryOut(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True

class ProductCreate(BaseModel):
    name: str
    description: Optional[str]
    price: float
    category_id: Optional[int]

class ProductOut(BaseModel):
    id: int
    name: str
    description: Optional[str]
    price: float
    category: Optional[CategoryOut]

    class Config:
        orm_mode = True

class OrderOut(BaseModel):
    id: int
    user_id: int
    total: float
    status: str

    class Config:
        orm_mode = True

class UserOut(BaseModel):
    id: int
    email: EmailStr
    role: str

    class Config:
        orm_mode = True

class UpdateUserRole(BaseModel):
    role: str
