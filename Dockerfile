# -------------------------
# 1) Construcción del frontend (React)
# -------------------------
FROM node:18 AS frontend-build

WORKDIR /frontend
COPY frontend/ .

RUN npm install
RUN npm run build


# -------------------------
# 2) Backend Flask
# -------------------------
FROM python:3.11-slim AS backend

WORKDIR /app

COPY backend/ .
COPY --from=frontend-build /frontend/dist ./static

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

CMD ["python", "app.py"]
