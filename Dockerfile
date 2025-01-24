# Menggunakan Node.js image sebagai base
FROM node:18-alpine AS builder

# Menentukan direktori kerja di container
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin semua file source code ke container
COPY . .

# Build proyek Next.js
RUN npm run build

# ----------- Stage untuk Menjalankan Aplikasi -----------

# Menggunakan image Node.js yang lebih ringan untuk produksi
FROM node:18-alpine

# Menentukan direktori kerja di container
WORKDIR /app

# Menyalin hasil build dari stage sebelumnya
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose port aplikasi Next.js (default: 3000)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
