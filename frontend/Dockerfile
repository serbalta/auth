# frontend/Dockerfile

# Node.js görüntüsünü kullan
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# Paket bağımlılıklarını kopyala ve yükle
COPY package*.json ./
RUN npm install

# Uygulama kaynaklarını kopyala
COPY . .

# Uygulamayı çalıştır
CMD ["npm", "start"]
