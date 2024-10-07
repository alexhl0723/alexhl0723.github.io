//ANTES QUE NADA INICIAMOS EL SERVIDOR CON EL COMANDO EN LA CONSOLA  "node js/info-pago-server.js" PARA QUE LOS DATOS SE GUARDEN EN EL ARCHIVO DE TEXTO datos_envio.txt Y NO OCURRA ERRORES AL MOMENTO DE GUARDAR LOS DATOS

//CREAR SERVIDOR PARA GUARDAR DATOS DE FORMULARIO EN ARCHIVO DE TEXTO
// Importar módulos necesarios
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// Crear la aplicación de Express
const app = express();
const port = 3000;

// Middleware para manejar datos POST
app.use(bodyParser.urlencoded({ extended: true }));

// CON ESTA RUTA SE MUESTRA LA PÁGINA info-pago.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'info-pago.html'));
});

// Ruta para procesar los datos del formulario
app.post('/registrar', (req, res) => {
    console.log('Datos recibidos:', req.body);
    // Extraer los datos del formulario DE LOS NAME QUE PODEMOS ENCONTRAR EN EL HTML DE info-pago.html Y GUARDARLOS EN UN ARCHIVO DE TEXTO
    const {
        nombre,
        apellidos,
        email,
        telefono,
        vivienda,
        calle,
        departamento,
        distritos,
        direccion,
        referencia
    } = req.body;
    //CREAR UNA VARIABLE QUE CONTENGA LOS DATOS DEL FORMULARIO , QUE SE GUARDEN EN UN ARCHIVO DE
    //TEXTO EN LA CARPETA archivos_planos Y LOS DATOS SE GUARDEN EN UN ARCHIVO LLAMADO datos_envio.txt
    // Y SE MUESTRE UN MENSAJE DE CONFIRMACIÓN EN LA PÁGINA
        const datos = `Nombre: ${nombre}, Apellidos: ${apellidos}, Email: ${email}, Teléfono: ${telefono}, Vivienda: ${vivienda}, Calle: ${calle}, Departamento: ${departamento}, Distrito: ${distritos}, Dirección: ${direccion}, Referencia: ${referencia}\n`;


    // Crear la carpeta si no existe y guardar los datos en un archivo de
    //texto en la carpeta archivos_planos
    const dirPath = path.join(__dirname, '..', 'archivos_planos');
    if (!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath, { recursive: true });
    }
    //GUARDAR LOS DATOS EN UN ARCHIVO DE TEXTO LLAMADO datos_envio.txt EN LA CARPETA
    //archivos_planos Y MOSTRAR UN MENSAJE DE CONFIRMACIÓN EN LA PÁGINA info-pago.html
    //Y CONDICIONES PARA VERIFICAR SI HUBO UN ERROR AL GUARDAR LOS DATOS O NO, Y MOSTRAR
    //UN MENSAJE DE ERROR EN LA PÁGINA info-pago.html
    fs.appendFile(path.join(dirPath, 'datos_envio.txt'), datos, (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            res.status(500).send('Hubo un error al registrar los datos.');
        } else {
            console.log('Datos guardados:', datos, '\n');
            res.status(200).send('Registro completado y datos guardados en el servidor.');
        }
    });
});

// INICIAR EL SERVIDOR EN EL PUERTO 3000 Y MOSTRAR UN MENSAJE DE CONFIRMACIÓN EN LA CONSOLA
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});