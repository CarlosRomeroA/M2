$("#boton").click(()=> {
    $("#lista").empty();
    $.ajax({
        url: 'http://localhost:5000/amigos',
        type: 'get',
        success: (info) => {
            info.forEach((amigo) => $("#lista").append(`<li id=${amigo.id}> ${amigo.name}</li>`));
        }

    })
})

