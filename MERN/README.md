# Mi aplicación MERN

Esta aplicación fue desarrollada utilizando el stack MERN de JavaScript.

## Backend
- En el backend, se utilizó Express con algunos middlewares y MongoDB Atlas para la gestión de la base de datos, con la respectiva URI de conexión.
- Se configuran los CORS middlewares. Se utiliza arquitectura MVC.
- Se crea con los comandos `npm init -y` y se intalan las dependencias `npm install express dotenv mongoose`
- Se crea y se configura manualmente el archivo `index.js`

## Frontend
- En el frontend, se utilizó React y Node.js, se utiliza bootstrap 5 para estilizar y sweetAlert2.
- Se crea el proyecto con el comando `npx create-react-app nombre_proyecto`
- Se hacen las validaciones para las respuestas del método fetch

## Descripción
La aplicación cuenta con un componente "post" que tiene un formulario donde el usuario puede crear un nuevo post, también tiene una ruta que recupera los posts desde MongoDB Atlas y los muestra rústicamente en la página web; todos los métodos HTTP están funcionando y validados con POSTMAN, falta implementarlos en la aplicación.

## Pantallazos

### React

- localhost:3000

![Alt text](image.png)

- sweetAlert2

![Alt text](image-5.png)

- sweetAlert2 de error

![Alt text](image-1.png)


### Express

- localhost:3001

```
En consola: curl --request GET http://localhost:3001 --header "Content-Type: application/json"
```

![Alt text](image-2.png)

- listado de posts

```
En consola: curl --request GET http://localhost:3001/api/posts --header "Content-Type: application/json"
```

![Alt text](image-3.png)

- post por id

```
En consola: curl --request GET http://localhost:3001/api/posts/64a725669808ac512c4ce04b --header "Content-Type: application/json"
```

![Alt text](image-4.png)

- Crear post por medio del verbo HTTP POST

```
En consola: curl --request POST http://localhost:3001/api/posts --header 'Content-Type: application/json' --data '{ "title": "PRUEBA CURL 24", "author": "jorge ardila", "body": "espacio destinado para el articulo", "tags": "vida" }'
```

#### Recuerda utilizar una consola o termina adecuada para las consultas con CURL.