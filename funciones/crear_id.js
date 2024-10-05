const generarId = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>?/';
    return [...Array(longitud)]
      .map(() => caracteres.charAt(Math.floor(Math.random() * caracteres.length)))
      .join('');
  };
const escuchar_evento=(socket,nombre,id=null)=>{
    if(!id){
        socket.on(nombre)
        console.log(nombre)
    }
    else{
        socket.on(nombre,id)
        console.log(id)
    }
}  
const emitir_evento =(socket, nombre, id=null)=>{
    if(!id){
        socket.emit(nombre)
    }
    else{
        socket.emit(nombre,generarId(id))
    }
}
const desconectar_evento =(socket,id)=>{
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', id)
    })
}
export{
    escuchar_evento,
    desconectar_evento,
    emitir_evento
}  
  