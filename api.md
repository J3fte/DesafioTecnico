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
Se nec
