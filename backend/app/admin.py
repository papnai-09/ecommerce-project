from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal
from .models import Product, Category, Order, User
from .schemas import ProductCreate, ProductOut, CategoryCreate, CategoryOut, OrderOut, UserOut, UpdateUserRole
from .auth.deps import admin_required

router = APIRouter(prefix="/admin", tags=["Admin"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Product endpoints
@router.post("/products", response_model=ProductOut, dependencies=[Depends(admin_required)])
def create_product(payload: ProductCreate, db: Session = Depends(get_db)):
    prod = Product(name=payload.name, description=payload.description, price=payload.price, category_id=payload.category_id)
    db.add(prod)
    db.commit()
    db.refresh(prod)
    return prod


@router.get("/products", response_model=list[ProductOut], dependencies=[Depends(admin_required)])
def list_products(db: Session = Depends(get_db)):
    return db.query(Product).all()


@router.get("/products/{product_id}", response_model=ProductOut, dependencies=[Depends(admin_required)])
def get_product(product_id: int, db: Session = Depends(get_db)):
    p = db.query(Product).filter(Product.id == product_id).first()
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    return p


@router.put("/products/{product_id}", response_model=ProductOut, dependencies=[Depends(admin_required)])
def update_product(product_id: int, payload: ProductCreate, db: Session = Depends(get_db)):
    p = db.query(Product).filter(Product.id == product_id).first()
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    p.name = payload.name
    p.description = payload.description
    p.price = payload.price
    p.category_id = payload.category_id
    db.commit()
    db.refresh(p)
    return p


@router.delete("/products/{product_id}", dependencies=[Depends(admin_required)])
def delete_product(product_id: int, db: Session = Depends(get_db)):
    p = db.query(Product).filter(Product.id == product_id).first()
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    db.delete(p)
    db.commit()
    return {"message": "deleted"}


# Categories
@router.post("/categories", response_model=CategoryOut, dependencies=[Depends(admin_required)])
def create_category(payload: CategoryCreate, db: Session = Depends(get_db)):
    c = Category(name=payload.name)
    db.add(c)
    db.commit()
    db.refresh(c)
    return c


@router.get("/categories", response_model=list[CategoryOut], dependencies=[Depends(admin_required)])
def list_categories(db: Session = Depends(get_db)):
    return db.query(Category).all()


# Orders
@router.get("/orders", response_model=list[OrderOut], dependencies=[Depends(admin_required)])
def list_orders(db: Session = Depends(get_db)):
    return db.query(Order).order_by(Order.created_at.desc()).all()


@router.put("/orders/{order_id}/status", dependencies=[Depends(admin_required)])
def update_order_status(order_id: int, status: str, db: Session = Depends(get_db)):
    o = db.query(Order).filter(Order.id == order_id).first()
    if not o:
        raise HTTPException(status_code=404, detail="Order not found")
    o.status = status
    db.commit()
    db.refresh(o)
    return o


# Users
@router.get("/users", response_model=list[UserOut], dependencies=[Depends(admin_required)])
def list_users(db: Session = Depends(get_db)):
    return db.query(User).all()


@router.put("/users/{user_id}/role", response_model=UserOut, dependencies=[Depends(admin_required)])
def update_user_role(user_id: int, payload: UpdateUserRole, db: Session = Depends(get_db)):
    u = db.query(User).filter(User.id == user_id).first()
    if not u:
        raise HTTPException(status_code=404, detail="User not found")
    u.role = payload.role
    db.commit()
    db.refresh(u)
    return u
