// const { get } = require("@11ty/eleventy/src/TemplateCache");
function limpiar(tipoDeLimpieza) {
    if(tipoDeLimpieza === "contenedor"){
        $("#lista").empty();
        $("#amigo").empty();
    }
    $("#input").val("");
    $("#inputDelete").val("");
}

function mostrarAmigos() {
    $.ajax({
        url: 'http://localhost:5000/amigos',
        type: 'get',
        success: (info) => {
            info.forEach((amigo) => $("#lista").append(`<li id=${amigo.id}> ${amigo.name}</li>`));
        }
    })
}

function buscarAmigos(id) {
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'get',
        success: (info) => {
            $("#amigo").append(`<span>${info.name}</span>`);
            limpiar();
            mostrarAmigos();
        },
        error: (error) => {
            mostrarAmigos();
            if(error) {
                alert("el id ingresado no existe");
                limpiar();
            }
        }
    })
}

function borrarAmigos(id) {
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'delete',
        success: (info) => {
            alert("amigo eliminado con exito");
            limpiar();
            limpiar("contenedor");
            mostrarAmigos();
        }
    })
}

$("#boton").click( ()=> {
    limpiar('contenedor');
    mostrarAmigos();
})

$("#search").click(()=> {
    let id = $("#input").val();
    if(!id) return alert("debe introducir un id valido");
    limpiar("contenedor");
    buscarAmigos(id);
})
 
$("#delete").click( () => {
    let id = $("#inputDelete").val();
    if(!id) return alert("debe introducir un id valido");
    borrarAmigos(id);    
})