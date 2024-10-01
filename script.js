
console.log("0- INICIA");

const produtosX = {
    sku: '',
    nome: '',
    preco: '',
    total: '',

}





for (const ProdutoFinal in produtosX) {

    const produtosX = {
        sku: '',
        nome: '',
        preco: '',
        total: '',
    
    }

    console.log(produtosX);

    break;
}




//produtos = document.querySelectorAll(".product-cart-info .product-name");


const produtos_nome = document.querySelectorAll(".product-cart-info .product-name");


const produtos_sku = document.querySelectorAll(".product-cart-info .product-cart-sku");


//const produtos_preco = document.querySelectorAll(".product-cart-info .product-name");


//const produtos_total = document.querySelectorAll(".product-cart-info .product-name");




console.log("1 - CAPTURADOS: ", produtos_nome, produtos_nome.length);
console.log("1 - CAPTURADOS: ", produtos_sku, produtos_sku.length);

console.log("1.0 - ARRAY 0: ", produtos_nome[0].querySelector("a").textContent);
console.log("1.0 - ARRAY 0: ", produtos_sku[0].textContent.trim().replace('SKU:', '').trim());
console.log("1.1 - ARRAY 1: ", produtos_nome[1].querySelector("a").textContent);
console.log("1.1 - ARRAY 1: ", produtos_sku[1].textContent.trim().replace('SKU:', '').trim());
console.log("1.2 - ARRAY 2: ", produtos_nome[2].querySelector("a").textContent);
console.log("1.2 - ARRAY 2: ", produtos_sku[2].textContent.trim().replace('SKU:', '').trim());

console.log("----------------------------------------");

console.log("2 - INICI FOREACH");
i = 0;
var produtos_para_mensagem = "1";
produtos_nome.forEach(produtos => {

    console.log("2.1 - DENTRO DO FOREACH");

    let produto = produtos.querySelector("a").textContent;

    

 
    
    
    i = i + 1;


    if (produto) {

        produtos_para_mensagem = produto + " + " + produtos_para_mensagem;

    }


    else {
        console.log("else");
    }

});

console.log(produtos_para_mensagem);
