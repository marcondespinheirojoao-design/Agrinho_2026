// Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao projeto Agrinho 2026!");
};

// Função para mostrar uma curiosidade
function mostrarCuriosidade() {
    const curiosidades = [
        "O Paraná é um dos maiores produtores de trigo do Brasil.",
        "A agricultura sustentável ajuda a preservar o solo e a água.",
        "O trigo é utilizado na fabricação de pães, massas e bolos.",
        "O agronegócio é responsável por grande parte dos alimentos consumidos pela população."
    ];

    const numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML =
        curiosidades[numero];
}
