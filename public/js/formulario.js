const API_URL = "http://201.140.116.237:3007/api";

$("#formulario").on("submit", function (event) {
    event.preventDefault();
    let data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: API_URL + "/empleados",
        data: data,
        success: (response) => {
            alert("Se agrego el usuario correctamente");
            location.reload();
        }
    });
})
