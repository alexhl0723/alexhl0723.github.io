// captar id del boton y del contenedor de los comentarios,agregar img
let btn = document.getElementById("boton");
let divComent=document.getElementById("comentario");
let img = "../img/avatar2.png";


function agregarComen(){
    // obtener el contenido o valor de cada input(.value)
    let  comentario = document.getElementById("coment").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    //condicional para asegurar que todos los campos esten completos 
    if(nombre===""|| comentario==="" || email===""){
        alert("Ingrese sus datos completos");
        return;
    }

    //crear un div para cada comentario
    let insertarComen = document.createElement("div");
    insertarComen.className = "cajita-coment";
    insertarComen.innerHTML= `<img src="${img}">
    <div class="info-coment"><h3>${nombre},dijo:</h3><p>${comentario}</p></div>`;
    divComent.appendChild(insertarComen);
    //limpiar los input de nombre ,email y text area 
    document.getElementById("coment").value="";
    document.getElementById("nombre").value="";
    document.getElementById("email").value="";

    //crear el objeto con el contenido de nuestro div comentario
    let contentCome ={
        imagen:img,
        nom:nombre,
        opinion:comentario,
    } ;

    // crear un arrglo  y obtener el contenido que guarda(Json.parse porque es array) 
    let guardarContentCome= JSON.parse(localStorage.getItem('guardarComentario')) || [];

    //métod push para agregar el objeto al array 
    guardarContentCome.push(contentCome);

    //almacenar el contenido del comentario
    localStorage.setItem('guardarComentario',JSON.stringify(guardarContentCome));


};
// acción del botón enviar cuando se de click, ejecuta la función
btn.addEventListener("click",agregarComen);

//función para agregar los comentarios en la página,los comentarios ya estan alamcenados en locale storage
function mostrarComentarios(){
    let guardarContentCome= JSON.parse(localStorage.getItem('guardarComentario')) || [];
    //recorrer el arreglo que tiene los comentarios y mostrarlos
    guardarContentCome.forEach(function(contentCome){

        let insertarComen = document.createElement("div");
        insertarComen.className = "cajita-coment";
        insertarComen.innerHTML= `<img src="${contentCome.imagen}">
        <div class="info-coment"><h3>${contentCome.nom},dijo:</h3><p>${contentCome.opinion}</p></div>`;
        divComent.appendChild(insertarComen);
    });
} 
//la funición se ejecutara cuando la pagina cargue por completo
window.onload=mostrarComentarios();
      



