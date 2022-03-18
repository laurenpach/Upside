function validar() {
    var campo = document.getElementById("nome");
    var campo = document.getElementById("sobrenome");
    var campo = document.getElementById("email");
    var campo = document.getElementById("telefone");
    var campo = document.getElementById("senha");

    if (campo.value == "") {
        alert("Todos os campos são obrigatórios")
    }

    else {
            alert("Dados gravados com sucesso");
        }
}

