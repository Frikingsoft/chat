import express from 'express' // Importo el módulo de express que me sirve para facilitarme la creación de un servidor, para instalarlo: npm i express
import cors from 'cors' // Importo el módulo de cors que me sirve para recibir peticiones de distintas direcciones externas a mi aplicación en localhost, por defecto acepta todas las peticiones, "Cambiar en el modo Producción y establecer a mano solo las direcciones que puede aceptar, y en lo posible ninguna" , para instalar usar : npm i cors
import morgan from 'morgan' // Solo instalar en modo de desarrollo, eliminar en modo de producción, da información de todas las conexiones entrantes , para instalar : npm i morgan
import { socket_io  } from './controladores/websocket.js' // Módulo de websocket para establecer conexión en tiempo real, es un objeto que estoy creando en el archivo websocket.js

const servidor = express() // ejecuto la función de express

servidor.set('puerto', process.env.PORT || 80 || 8080) // Defino una configuración en el servidor que me crea una variable puerto que puede tomar el valor de una variable PORT si está definida como variables de entorno, sino usa el puerto 80 o sino el 8080
servidor.use(express.json()) // .use es un middleware o intermediario, se ejecuta antes de las rutas de la aplicación, en este caso le pido al servidor que va a recibir la información desde el servidor express en formato json
servidor.use(cors()) //.use es un middleware o intermediario, se ejecuta antes de las rutas de la aplicación, le pido que acepte las conexiones desde cualquier sitio "USAR SOLO EN DESARROLLO"
servidor.use(morgan('dev'))//.use es un middleware o intermediario, se ejecuta antes de las rutas de la aplicación, le pido que me muestre todas las conexiones, puedo ver las rutas a las que se quiere acceder

socket_io(servidor) // conexión con web socket, le envío como parámetro el servidor 




export {
    servidor
}
