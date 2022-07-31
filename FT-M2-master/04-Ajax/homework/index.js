// const { get } = require("@11ty/eleventy/src/TemplateCache");

$("#boton").click( ()=> {
    $("#lista").empty()
    $.ajax({
        url: 'http://localhost:5000/amigos',
        type: 'get',
        success: (info) => {
            info.forEach((amigo) => $("#lista").append(`<li id=${amigo.id}> ${amigo.name}</li>`))
        }
    })
})

$("#search").click(()=> {
    $("#amigo").empty();
    let id = $("#input").val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'get',
        success: (info) => {
            $("#amigo").append(`<span>${info.name}</span>`);
            $("#input").val("");
        }
    })
})

$("#delete").click( () => {
    let id = $("#inputDelete").val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "delete",
        success: (info) => {
            alert("amigo eliminado con exito");
            $("#inputDelete").val("");
            $("#lista").empty();
            $.ajax({
                url: 'http://localhost:5000/amigos',
                type: 'get',
                success: (info) => {
                    info.forEach((amigo) => $("#lista").append(`<li id=${amigo.id}> ${amigo.name}</li>`))
                }
            })
        }
    })
})