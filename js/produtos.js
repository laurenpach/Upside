var listaProdutos = [[0, 'Jaqueta Punk Cat', 'produto1.jpg', false ], [1, 'Jaqueta Hotter Than Hell', 'produto4.jpg', false ], [2, 'Jaqueta Love Me Love Me Not', 'produto3.jpg', false ], ];

var carrinho = [];

window.onload = function(){

    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("div-produto").innerHTML = "";

    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="card-produto">'
        conteudo += '<img src="../imagens/' + listaProdutos [i][2] + '">'
        conteudo += '<div class="descricao">'
        conteudo += '' + listaProdutos [i][1] +''
        conteudo += '</div>'

        if (listaProdutos[i][3] == false) {
            conteudo += '<div class="div-card-comprar" onclick="comprar(' + listaProdutos [i] [0] + ')">' 
            conteudo += 'Comprar'
            conteudo += '</div>'
        }

        else {
            conteudo += '<div class="div-card-comprar produto-adicionado">' 
            conteudo += 'Adicionado ao Carrinho'
            conteudo += '</div>'
        }

        conteudo += '</div>'

        document.getElementById("div-produto").innerHTML += conteudo;
    }
}

function comprar(id){
    
    listaProdutos[id][3] = true;   

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();
}

