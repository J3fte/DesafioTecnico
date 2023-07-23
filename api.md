# Como correr la api
## Contenido
- [Descripción](#descripción)
- [Instalación y Ejecución](#instalación-y-ejecución)

# Descripción
Esta es una api full rest creada en larabel 9 se creo usando el MVC(Modelo vista controlador) para mantener un orden.

## Endpoints de la api
| Metodo    | EndPoint                         | Descripcion |
|-----------|----------------------------------|-----------|
| GET       | /api/v1/notes                    |Paginar notas, ordenadas por fecha de creación y primero las fijadas   |
| POST      | /api/v1/notes                    | Crear notas |
| DELETE    | /api/v1/notes/{{id}}             | Eliminar nota enviando por url el ID de la nota    |
| PUT       | /api/v1/notes/{{id}}             | Modificar nota    |
| POST      | /api/v1/notes/{{id}}/archived    | Archivar nota    |
| GET       | /api/v1/notes/archived           | Paginar notas que han sido archivadas  |

# Instalación y Ejecución 
Antes de emepzar se debe asegurarse de que su máquina local tenga PHP y [Composer](https://getcomposer.org/) instalados.
Una vez que hayas descargado el proyecto, sigue estos pasos para la instalación y ejecución:

1. Abre una terminal o símbolo del sistema y navega hasta la carpeta del proyecto ./notes-app.
2. Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
```
# Instalar Dependencias:
$ composter install

```
3. Antes de correr el servidor se tiene que migrar la base de datos, para esto se tienen que configurar unos archivos para que funcione en tu maquina
   Entras al archivo .env que se encuentra en la ruya /notas-app/.env.
   Busca las siguientes lineas de codigo:
```
    DB_CONNECTION=mysql   // Aqui se pone el tipo de coneccion como estamos usando mysql lo dejamos asi
    DB_HOST=127.0.0.1     // Aqui va el host como se corre el proyecto de manera local asi se queda
    DB_PORT=3306          // Aqui va el puerto de la base de datos como usamos xampp viene por defecto en este puerto  
    DB_DATABASE=bdnotas   // Aqui va el nombre de la base de datos que vamos a utilizar
    DB_USERNAME=root      // El usuario con el que vamos a crear la coneccion
    DB_PASSWORD=          // Aqui va tu contraseña, si no tienes una puedes dejarla en blanco
```
5. Una vez guardado ejecuta el siguiente comando en el simbolo del sistema:
```
  #Migracoin para crear las tablas necesarias en la base de datos
  $ php artisan migrate
```
6. Finalmente, inicia el servidor de desarrollo de Laravel ejecutando el siguiente comando:
```
  #Iniciar el servidaor
  $ php artisan serve
```
  Esto iniciará el servidor en la dirección http://127.0.0.1:8000.
