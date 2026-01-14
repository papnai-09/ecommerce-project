# Deploying to Render

This guide will help you deploy your FastAPI backend to Render and connect it to Neon PostgreSQL.

## Prerequisites

1. A Render account (sign up at https://render.com)
2. A Neon account with a PostgreSQL database created
3. Your Neon database connection string

## Step 1: Get Your Neon Database Connection String

1. Log in to your Neon dashboard
2. Select your project and database
3. Copy the connection string (it should look like: `postgresql://user:password@host.neon.tech/dbname?sslmode=require`)
4. Keep this handy for Step 3

## Step 2: Push Your Code to GitHub

1. Initialize git in your backend folder (if not already done):
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub and push:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

## Step 3: Deploy on Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `ecommerce-backend` (or your preferred name)
   - **Environment**: `Python 3`
   - **Root Directory**: `backend` ⚠️ **CRITICAL**: Must be set to `backend` to fix "ModuleNotFoundError: No module named 'app'"
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

5. Add Environment Variables:
   - `DATABASE_URL`: Your Neon connection string from Step 1
   - `SECRET_KEY`: Generate a random secret key (you can use: `openssl rand -hex 32`)
   - `FRONTEND_ORIGINS`: Your frontend URL(s), comma-separated (e.g., `https://your-frontend.onrender.com,http://localhost:3000`)
   - `EMAIL_HOST`: Your SMTP host (e.g., `smtp.gmail.com`)
   - `EMAIL_PORT`: `587`
   - `EMAIL_USERNAME`: Your email address
   - `EMAIL_PASSWORD`: Your email app password
   - `EMAIL_FROM`: Your email address

6. Click "Create Web Service"

## Step 4: Update Your Frontend

After deployment, Render will give you a URL like `https://your-backend.onrender.com`. Update your frontend's API base URL:

In `frontend/lib/api.js`, change:
```javascript
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-backend.onrender.com";
```

## Step 5: Verify Deployment

1. Visit `https://your-backend.onrender.com/docs` to see the FastAPI Swagger UI
2. Test the `/auth/signup` endpoint
3. Check the logs in Render dashboard for any errors

## Troubleshooting

- **`ModuleNotFoundError: No module named 'app'`**: 
  - ⚠️ **Most common issue**: Set **Root Directory** to `backend` in Render dashboard
  - Go to: Your Service → Settings → Root Directory → Set to `backend`
  - This tells Render where to find your `app` module
- **Database connection errors**: Verify your Neon connection string includes `?sslmode=require`
- **CORS errors**: Make sure `FRONTEND_ORIGINS` includes your frontend URL
- **Import errors**: Ensure `requirements.txt` includes all dependencies
- **Port errors**: Render automatically sets `$PORT`, make sure your start command uses it

## Notes

- Render free tier services spin down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- Consider upgrading to a paid plan for always-on service
