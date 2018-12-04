var socket = io();
socket.on('connect', function(){
    console.log('conectado al servidor');
    
});
// los ON son para escuchar y los emit para emitir
socket.on('disconnect', function(){
    console.log('perdimos la conexion con el servidor');
    
});
// ENVIA INFORMACION AL SERVIDOR
socket.emit('enviarMensaje', {
    usuario:'Argenis',
    mensaje: 'hola mundo'
}, function(resp){ // esta funcion como segundo argumento se dispara si en el servidor todo salio bien o mal
    console.log('Respuesta del servidor: ', resp);
    
})

//ESCUCHAR INFORMACION DEL SERVIDOR
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ',mensaje);
    
});