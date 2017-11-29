var express = require('express'); // Cargue el módulo expreso instalado en la variable (express)
var app = express(); //Ejecute express para inicializar el objeto de la aplicación

app.get('/',function (req,res) { // Si obtiene una solicitud de 'get' en '/'
res.send('Hello World!'); // Enviar 'Hello World!"
});

app.listen(3000, function(){ //Usa el puerto 3000
console.log('Server On!'); //Este es el mensaje que se mostrará en la ventana de la consola cuando el servidor se esté ejecutando
});
