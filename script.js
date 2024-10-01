

const produtos_capturados_nao_tratados = document.querySelectorAll(".product-cart-info .product-name");

var produtos_para_mensagem = "";

console.log(produtos_capturados_nao_tratados);
console.log(produtos_capturados_nao_tratados[1]);

produtos_capturados_nao_tratados.forEach(produtos => {

    var produto = produtos.querySelector("a").textContent;
    if (produto) {

        console.log(produto.length);



        produtos_para_mensagem = produtos_para_mensagem + " " + produto;
        console.log(produtos_para_mensagem);
    }
    else {
        console.log("else");
    }



});

console.log(produtos_para_mensagem);