var produtos_para_mensagem = "";
var mensagem = "";
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

const produtos_qtd = document.querySelectorAll(".product-cart-actions .input-text.qty");


const produtos_preco = document.querySelectorAll(".product-cart-price .cart-price");


const produtos_total = document.querySelectorAll(".product-cart-total .cart-price");




console.log("1 - CAPTURADOS: ", produtos_nome, produtos_nome.length);
console.log("1 - CAPTURADOS: ", produtos_sku, produtos_sku.length);
console.log("1 - CAPTURADOS: ", produtos_qtd, produtos_qtd.length);

console.log("----------------------------------------");

console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[0].querySelector("a").textContent);
console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[0].textContent.replace('SKU:', '').trim());
console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[0].value);
console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[0].querySelector("span").textContent);
console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[0].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[0].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());


console.log("----------------------------------------");

console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[1].querySelector("a").textContent);
console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[1].textContent.replace('SKU:', '').trim());
console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[1].value);
console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[1].querySelector("span").textContent);
console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[1].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[1].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());

console.log("----------------------------------------");

console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[2].querySelector("a").textContent);
console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[2].textContent.replace('SKU:', '').trim());
console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[2].value);
console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[2].querySelector("span").textContent);
console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[2].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[2].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
console.log("----------------------------------------");

for(let i = 0; i < produtos_nome.length; i++) {

    console.log("################################################################################################");
    console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[i].querySelector("a").textContent);
    console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[i].textContent.replace('SKU:', '').trim());
    console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[i].value);
    console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[i].querySelector("span").textContent);
    console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[i].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
    console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[i].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());

    mensagem = mensagem +1;
    
    
}
console.log(mensagem);

console.log("2 - INICI FOREACH");
i = 0;

produtos_para_mensagem
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
