import fs from "fs";
import { exec } from "child_process";

const url =
  process.env.YOUTUBE_URL || "https://www.youtube.com/watch?v=2iVf6CtcasQ";
const outputDir = "downloads";
const output = `${outputDir}/video.mp4`;

// Crear el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

console.log(`Descargando video de: ${url}`);

const command = `yt-dlp -f bestvideo+bestaudio --merge-output-format mp4 -o ${output} ${url}`;
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error al descargar el video: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Advertencia: ${stderr}`);
  }
  console.log(`✅ Descarga completada: ${stdout}`);
});
