const SENHA = "diretoria123"; // troque a senha

function acessar() {
    const senhaDigitada = document.getElementById("senha").value;

    if (senhaDigitada === SENHA) {
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo").classList.remove("hidden");
    } else {
        document.getElementById("erro").innerText = "Senha incorreta";
    }
}
