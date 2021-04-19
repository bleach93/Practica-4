const API_URL = "http://localhost:3007/api";

$("#formulario").on("submit", function (event) {
    event.preventDefault();
    let data = $(this).serialize();
    $.ajax({
        type: "PUT",
        url: API_URL + "/empleados",
        data: data,
        success: (response) => {
            alert("La informacion del usuario se actualizo correctamente");
            location.reload();
        }
    });
})
