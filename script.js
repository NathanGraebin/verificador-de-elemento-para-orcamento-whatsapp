var produtos_para_mensagem = "";
var msg = "";

const produtos_nome = document.querySelectorAll(".product-cart-info .product-name");

const produtos_sku = document.querySelectorAll(".product-cart-info .product-cart-sku");

const produtos_qtd = document.querySelectorAll(".product-cart-actions .input-text.qty");

const produtos_preco = document.querySelectorAll(".product-cart-price .cart-price");

const produtos_total = document.querySelectorAll(".product-cart-total .cart-price");

// 
// console.log("1 - CAPTURADOS: ", produtos_nome, produtos_nome.length);
// console.log("1 - CAPTURADOS: ", produtos_sku, produtos_sku.length);
// console.log("1 - CAPTURADOS: ", produtos_qtd, produtos_qtd.length);

// console.log("----------------------------------------");

// console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[0].querySelector("a").textContent);
// console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[0].textContent.replace('SKU:', '').trim());
// console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[0].value);
// console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[0].querySelector("span").textContent);
// console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[0].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
// console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[0].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());


// console.log("----------------------------------------");

// console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[1].querySelector("a").textContent);
// console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[1].textContent.replace('SKU:', '').trim());
// console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[1].value);
// console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[1].querySelector("span").textContent);
// console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[1].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
// console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[1].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());

// console.log("----------------------------------------");

// console.log("1.0 - ARRAY 0 - NOME> ", produtos_nome[2].querySelector("a").textContent);
// console.log("1.0 - ARRAY 0 - SKU> ", produtos_sku[2].textContent.replace('SKU:', '').trim());
// console.log("1.0 - ARRAY 0 - QTD> ", produtos_qtd[2].value);
// console.log("1.0 - ARRAY 0: PREÇO PRODUTO>", produtos_preco[2].querySelector("span").textContent);
// console.log("1.0 - ARRAY 0: PREÇO PRODUTO S/ R$>", produtos_preco[2].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
// console.log("1.0 - ARRAY 0: TOTAL>", produtos_total[2].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim());
// console.log("----------------------------------------");


for(let i = 0; i < produtos_nome.length; i++) {

    f_produto_nome = "Nome: " + produtos_nome[i].querySelector("a").textContent;
    f_produto_sku = "SKU: " + produtos_sku[i].textContent.replace('SKU:', '').trim();
    f_produto_qtd = "Qtd: " + produtos_qtd[i].value;
    f_produto_preco = "Preço: " + produtos_preco[i].querySelector("span").textContent;
    f_produto_total = "Total: " + produtos_total[i].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim();

    
    msg = msg + " [ " + f_produto_nome + " + " + f_produto_sku + " + " + f_produto_qtd + " + " + f_produto_preco + " + " + f_produto_total + " ] ";

}
var cabecalho = "Olá, vim pelo site e quero fechar minha compra! Os produtos do meu orçamento são > ";

console.log(cabecalho + msg);


// GERADO POR CHAT GPT
// PROMPT > Qual forma mais profissional e otimizada de fazer isso em javascript

// const produtos = [];

// for (let i = 0; i < produtos_nome.length; i++) {
//   const produto = {
//     nome: produtos_nome[i].querySelector("a").textContent,
//     sku: produtos_sku[i].textContent.replace('SKU:', '').trim(),
//     qtd: produtos_qtd[i].value,
//     preco: produtos_preco[i].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim(),
//     total: produtos_total[i].querySelector("span").textContent.replace(/^R\$?\s*/, '').trim(),
//   };
//   produtos.push(produto);
// }

// const msgProdutos = produtos.map(produto => {
//   return `[ Nome: ${produto.nome} + SKU: ${produto.sku} + Qtd: ${produto.qtd} + Preço: ${produto.preco} + Total: ${produto.total} ]`;
// }).join('\n');

// const cabecalho = "Olá, vim pelo site e quero fechar minha compra! Os produtos do meu orçamento são:\n";

// console.log(cabecalho + msgProdutos);
