let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let genero = document.getElementById("genero");
let nascimento = document.getElementById("nascimento");
let telefone = document.getElementById("telefone");
let dados = document.getElementById("mostrar-dados");

function salvarDados() {
    alert("Dados salvos");
}

function mostrarDados() {
    nome = nome.value;
    idade = idade.value;
    genero = genero.value;
    nascimento = nascimento.value;
    nascimentoinvertido =
        nascimento.charAt(8) +
        nascimento.charAt(9) +
        nascimento.charAt(7) +
        nascimento.charAt(5) +
        nascimento.charAt(6) +
        nascimento.charAt(4) +
        nascimento.charAt(0) +
        nascimento.charAt(1) +
        nascimento.charAt(2) +
        nascimento.charAt(3);
    telefone = telefone.value;

    return (dados.innerHTML =
        "<h3>Informações Salvas:</h3>" +
        "<p>Nome: " +
        nome +
        "</p>" +
        "<p>Idade: " +
        idade +
        "</p>" +
        "<p>Gênero: " +
        genero +
        "</p>" +
        "<p>Data de nascimento: " +
        nascimentoinvertido +
        "</p>" +
        "<p>Telefone: " +
        telefone +
        "</p>");
}

function limparDados() {
    nome.value = "";
    idade.value = "";
    genero.selectedIndex = 0;
    nascimento.value = "";
    telefone.value = "";
}
