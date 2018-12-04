const { io } = require('../server')

io.on('connection', (cliente)=>{
    console.log('Usuario conectado');

    
    cliente.on('disconnect', ()=>{
        console.log('usuario desconectado');
    });
    
    // SE COMUNICA CON LOS CLIENTES
    cliente.emit('enviarMensaje', {
        usuario: 'ADMINISTRADOR',
        mensaje: 'Bienvenido'
    })

    // ESCUCHAR AL CLIENTE
    cliente.on('enviarMensaje', (data, callback)=>{
        console.log(data);  
        // BROADCAST SE LO ENVIA A TODOS LOS USUARIOS 
        cliente.broadcast.emit('enviarMensaje',data )

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });// para hacerle saber al cliente que todo salio bien o mal
        // }else{
        //     callback({
        //         resp:'Todo salio mal'
        //     });
        // }
    })
    
})