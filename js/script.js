const botaoMenu = document.getElementById("botao-menu");
const opcoesMenu = document.getElementById("opcoes-menu");

botaoMenu.addEventListener("click", function() {

    opcoesMenu.hidden = !opcoesMenu.hidden;

    botaoMenu.setAttribute(
        "aria-expanded",
        !opcoesMenu.hidden
    );

    botaoMenu.setAttribute(
        "aria-label",
        opcoesMenu.hidden ? "Abrir menu" : "Fechar menu"
    );

});
