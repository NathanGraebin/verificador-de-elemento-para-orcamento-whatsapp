var produtos_para_mensagem = "";
var msg = "";

const produtos_nome = document.querySelectorAll(".product-cart-info .product-name");

const produtos_sku = document.querySelectorAll(".product-cart-info .product-cart-sku");

const produtos_qtd = document.querySelectorAll(".product-cart-actions .input-text.qty");

const produtos_preco = document.querySelectorAll(".product-cart-price .cart-price");

const produtos_total = document.querySelectorAll(".product-cart-total .cart-price");

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
