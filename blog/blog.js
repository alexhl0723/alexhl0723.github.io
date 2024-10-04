//obtener todas las tarjetas 
let tarjetas= document.querySelectorAll(".contenido");
let enlaces= document.querySelectorAll(".categorias p");

function tarjetasPorCategoria(evento){
    //seleccionar la etieuqta p con la clase principal para eliminar la clase
    document.querySelector(".principal").classList.remove("principal");
    //target me va dar la etiqueta que este dando click y le va añadir la clase principal
    evento.target.classList.add("principal")

    tarjetas.forEach(tarjeta => {
        tarjeta.classList.add("ocultar");
        if(tarjeta.dataset.categ === evento.target.dataset.categ || evento.target.dataset.categ === "publicaciones"){
            tarjeta.classList.remove("ocultar");
        }
    })

};

enlaces.forEach( enlace=> enlace.addEventListener("click",tarjetasPorCategoria));