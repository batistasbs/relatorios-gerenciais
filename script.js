// ====== CONFIGURAÇÃO ======
const SENHA = "diretoria123"; // <-- troque aqui

const relatorios = {
  faturamento: {
    titulo: "Relatório de Faturamento",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjAwMmM0NzUtNmM3OS00OWIyLThhNTItMTg1OGExMzM5MTk5IiwidCI6ImJiNWFlODA1LTM1YmYtNGRkNS05NGZlLWQ4M2JiMWVkNDI0MiJ9"
  },
  orcamento_2026: {
    titulo: "Orçamento 2026",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNWQ0MmExYTktZmFkMi00MDc1LWExODEtYjMzNTg1Y2JiNTY5IiwidCI6ImJiNWFlODA1LTM1YmYtNGRkNS05NGZlLWQ4M2JiMWVkNDI0MiJ9"
  }
};

// ====== LOGIN ======
function acessar() {
  const senhaDigitada = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (senhaDigitada === SENHA) {
    // guarda que está "logado" (vale só nesse navegador)
    localStorage.setItem("portal_logado", "1");

    document.getElementById("login").classList.add("hidden");
    document.getElementById("portal").classList.remove("hidden");

    // carrega relatório padrão ao entrar
    carregarRelatorio("faturamento");
  } else {
    erro.textContent = "Senha incorreta";
  }
}

function sair() {
  localStorage.removeItem("portal_logado");
  document.getElementById("portal").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("senha").value = "";
  document.getElementById("erro").textContent = "";
}

// Se o usuário já entrou antes, não pede senha de novo
window.addEventListener("load", () => {
  const logado = localStorage.getItem("portal_logado") === "1";
  if (logado) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("portal").classList.remove("hidden");
    carregarRelatorio("faturamento");
  }
});

// ====== RELATÓRIOS ======
function carregarRelatorio(nome) {
  const relatorio = relatorios[nome];

  if (!relatorio) {
    alert("Relatório não encontrado: " + nome);
    return;
  }

  document.getElementById("titulo").innerText = relatorio.titulo;
  document.getElementById("iframeRelatorio").src = relatorio.url;
}
