var listaCarrinho = [];

window.onload = function() {
    
    listaCarrinho = JSON.parse(window.localStorage.getItem("carrinho"));

    console.log(listaCarrinho);

    montarCardProdutos();
}


function montarCardProdutos(){

    for(var i = 0; i < listaCarrinho.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="card-produto">'
        conteudo += '<img src="../imagens/' + listaCarrinho [i][2] + '">'
        conteudo += '<div class="descricao">'
        conteudo += '' + listaCarrinho [i][1] +''
        conteudo += '</div>'
        conteudo += '</div>'

        document.getElementById("div-produto").innerHTML += conteudo;
    }
}
