FROM node:20-alpine

WORKDIR /

COPY package*.json ./
RUN npm install

# Instalar Python, ffmpeg y configurar un entorno virtual para yt-dlp
RUN apk add --no-cache python3 py3-pip ffmpeg \
    && python3 -m venv /opt/venv \
    && . /opt/venv/bin/activate \
    && pip install --no-cache-dir yt-dlp

# Asegurar que el entorno virtual esté disponible
ENV PATH="/opt/venv/bin:$PATH"

COPY . .

CMD ["node", "index.js"]
