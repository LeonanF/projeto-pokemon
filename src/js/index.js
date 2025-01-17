const btnAvancar = document.getElementById("btn-avancar"); //passo1, obj 1
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado (){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function() {
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado()

    cartaoAtual++;
    mostrarCartao(cartaoAtual)
    
     if(cartaoAtual===2){
        cartaoAtual=-1;
    }


});

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) return

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual)

});
