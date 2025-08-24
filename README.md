# YouTube Downloader

This project is a Dockerized Node.js application for downloading YouTube videos using `yt-dlp`. It supports multiple video formats, including `.mp4` and `.avi`, and saves the downloaded files to a local directory.

## Features
- Download YouTube videos in various formats.
- Supports `.mp4` and `.avi` formats.
- Dockerized for consistent execution across environments.
- Local storage of downloaded videos.

## Prerequisites
- Docker
- Docker Compose

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd youtube-downloader
   ```

2. Build and start the Docker container:
   ```bash
   docker-compose up --build
   ```

3. Access the `downloads` directory to find your downloaded videos.

## Usage

1. Edit the `index.js` file to specify the YouTube video URL and desired format.

2. Run the application:
   ```bash
   docker-compose up
   ```

3. The downloaded video will be saved in the `downloads` directory.

## File Structure
- `index.js`: Main script for downloading videos.
- `Dockerfile`: Configures the Docker container with necessary dependencies.
- `docker-compose.yml`: Manages container configuration and volume mapping.
- `downloads/`: Directory where downloaded videos are saved.

## Troubleshooting
- Ensure Docker and Docker Compose are installed and running.
- Verify the `downloads` directory is correctly mapped in `docker-compose.yml`.
- Check the logs for any errors during the download process.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
