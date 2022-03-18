function acesso() {
    var campo = document.getElementById("email");
    var campo = document.getElementById("senha");

    if (campo.value == "") {
        alert("Todos os campos são obrigatórios")
    }

    else {
            alert("Bem-vindo a sua conta");
        }
}

function cadastro() {
    window.location.href = "../paginas/cadastro.html"
}
