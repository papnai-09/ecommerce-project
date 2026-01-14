#!/bin/bash
# Startup script for Render deployment
export PYTHONPATH="${PYTHONPATH}:$(pwd)"
uvicorn app.main:app --host 0.0.0.0 --port $PORT
