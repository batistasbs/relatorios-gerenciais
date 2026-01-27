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

function carregarRelatorio(nome) {
    const relatorio = relatorios[nome];

    document.getElementById("titulo").innerText = relatorio.titulo;
    document.getElementById("iframeRelatorio").src = relatorio.url;
}
