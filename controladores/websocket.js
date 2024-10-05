import { createServer } from 'http'
import { Server } from 'socket.io'
import { emitir_evento,desconectar_evento,escuchar_evento } from "../funciones/crear_id.js"
let id = null
const socket_io = (servidor)=>{
    // Crear servidor HTTP
    const httpServer = createServer(servidor)
    // Configurar Socket.IO en el servidor HTTP
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })

    // Escuchar conexiones Socket.IO
    io.on('connection', (socket) => {
        // Funciones del Socket 
        emitir_evento(socket, 'generar_id', 24);
        
                
    })
  
  // Iniciar el servidor
  httpServer.listen(servidor.get("puerto"), () => {
    console.log(`Servidor funcionando OK en el puerto ${servidor.get('puerto')}`)
  })
}


export{
    socket_io
}