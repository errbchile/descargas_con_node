# Descargador de Videos de YouTube

Este proyecto es una aplicación Dockerizada en Node.js para descargar videos de YouTube utilizando `yt-dlp`. A continuación, se explica cómo instalar, configurar y ejecutar el proyecto desde cero.

## Requisitos Previos

1. **Instalar Docker Desktop**:
   - Descarga Docker Desktop desde su [página oficial](https://www.docker.com/products/docker-desktop/).
   - Sigue las instrucciones de instalación para tu sistema operativo (Windows, macOS o Linux).
   - Una vez instalado, abre Docker Desktop y asegúrate de que esté corriendo.

2. **Instalar Git**:
   - Descarga Git desde su [página oficial](https://git-scm.com/).
   - Sigue las instrucciones de instalación para tu sistema operativo.
   - Verifica la instalación ejecutando el siguiente comando en tu terminal:
     ```bash
     git --version
     ```

## Pasos para Configurar el Proyecto

1. **Clonar el Repositorio**:
   - Abre una terminal y ejecuta el siguiente comando:
     ```bash
     git clone <url-del-repositorio>
     cd youtube-downloader
     ```

2. **Construir y Levantar el Contenedor**:
   - En la misma terminal, ejecuta el siguiente comando para construir y levantar el contenedor:
     ```bash
     docker-compose up --build
     ```
   - Este comando descargará las dependencias necesarias y configurará el entorno.

3. **Verificar la Configuración**:
   - Asegúrate de que el contenedor esté corriendo correctamente. Deberías ver logs en la terminal indicando que la aplicación está lista.

## Cómo Usar la Aplicación

1. **Configurar la URL del Video**:
   - Abre el archivo `docker-compose.yml`.
   - Busca la sección `environment` y edita el valor de `YOUTUBE_URL` para especificar la URL del video de YouTube que deseas descargar.

   ```yaml
   environment:
     - YOUTUBE_URL=https://www.youtube.com/watch?v=tu_video
   ```

2. **Ejecutar la Aplicación**:
   - En la terminal, ejecuta el siguiente comando:
     ```bash
     docker-compose up
     ```
   - El video descargado se guardará en la carpeta `downloads` dentro del proyecto.

3. **Acceder al Video Descargado**:
   - Navega a la carpeta `downloads` en tu máquina local para encontrar el video descargado.

## Solución de Problemas

- **Docker no está corriendo**:
  - Asegúrate de que Docker Desktop esté abierto y funcionando.
- **Error al construir el contenedor**:
  - Verifica que tienes conexión a internet y que Docker está correctamente instalado.
- **El video no se descarga**:
  - Revisa los logs en la terminal para identificar posibles errores.

## Notas Finales

Este proyecto está diseñado para ser fácil de usar, incluso para principiantes. Si tienes alguna duda, no dudes en buscar ayuda en la comunidad de Docker o Node.js.
