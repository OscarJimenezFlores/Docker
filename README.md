# Mi primer proyecto Docker

### 1. Crea un directorio en tu IDE y genera los siguientes archivos


Un archivo ‘main.py’ (un archivo python que tendrá el código a ejecutar).
Un archivo ‘Dockerfile’ (un archivo Docker que tendrá las instrucciones necesarias para crear el entorno).

Normalmente, tendrías esta arquitectura de carpeta:

.
├── Dockerfile
└── main.py
0 directories, 2 files


### 2. Crea el archivo main.py con el siguiente contenido:
#!/usr/bin/env python3
print("¡Mi Primer proyecto en Docker, y mi nomnbre es Oscar Jimenez!")

### 3. Crea el archivo Dockerfile con el siguiente contenido:
```dockerfile
# Utiliza la imagen oficial de Python como base
FROM python:latest

# Copia el archivo 'main.py' desde tu máquina local al contenedor
COPY main.py /

# Define el comando que se ejecutará cuando el contenedor inicie
CMD [ "python", "./main.py" ]
```

### 4. Construye la imagen Docker
docker build -t python-test .

### 5. Ejecuta la imagen Docker
docker run python-test


