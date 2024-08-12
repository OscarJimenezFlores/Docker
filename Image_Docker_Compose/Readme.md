#EPNewman - Generar imagenes Docker y ejecutar Docker Compose

## Primero
1. Instalar NodeJS:  https://nodejs.org/
2. Instalar Docker: https://www.docker.com/products/docker-hub/
3. Crearse al cuenta en Docker y realizar el login en Docker Hub: https://hub.docker.com/

## Segundo ejecutar:
npm init -y

## Tercero ejecutar:
npm install express mongoose

## Cuarto ejecutar: 
docker-compose up --build

## Si quiere el log por consola ejecutar, pero también lo puede visualizar desde docker desktop:
docker-compose logs

## OPCIONAL, si requiere detener y eliminar sus contenedores ejecute:
docker-compose down

## Para Subir la imagen al DockerHUB debe ejecutar cada comando sin error. 

docker build -t image_docker_compose:latest .
docker tag image_docker_compose:latest tuusuario/image_docker_compose:latest
docker push tuusuario/image_docker_compose:latest

### Nota, reemplzar "tuusuario", por su usuario de docker.