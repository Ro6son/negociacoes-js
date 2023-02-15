//  Prólogo: regras, código e manutenção.

// Eu preciso ter uma lista com todos os 'campos' que eu tenho na minha página (index).
// Identificar e retornar o valor de cada item para montar as colunas da nossa (tr-linha).
// Cada item do array será o resultado de 'document.querySelector'.
// 'document.querySelector' é uma API do DOM que nos permite buscar determinados elementos no DOM usando um seletor CSS. '#' - significa seletor de ID.

// var campos = [
//   document.querySelector("#data"),
//   document.querySelector("#quantidade"),
//   document.querySelector("#valor"),
// ];

// console.log(campos);

// Está variável foi criada para guardar na memória as infos de tbody (Cache). Para não precisarmos ficar solicitando toda hora ao DOM.
// var tbody = document.querySelector("table tbody");

// Pedir para document.querySelector selecionar a class ('.form).
// Adicionar um addEventListener (submit). E quando esse evento for disparado eu vou executar uma function de call back.
// Com isso varrer cada item do meu array que são os nossos inputs pegar o valor deles e criar uma 'tr' dinamicamente.
// Criar a variável 'tr'através do metodo do document.createElement pra toda vez que o fomrmulário for submetido receber os valor dos inputs de cada item.
// Feito isso agora é só criar as nossas 'table-date' (td = Coluna).
// Criar as 'td=Colunas' para nossa 'tr=Linha'.
// Através do 'forEach' percorremos o array 'campos'. forEach executa uma função para processarmos os dados chamada callback que pode receber 3 parametros | currentValue | index | Array
//

// document.querySelector(".form").addEventListener("submit", function (event) {

//   event.preventDefault(); // Não submeter formulário! Dessa forma a página não sera atualizada e os valores da tabela irão aparecer.

//   var tr = document.createElement("tr");
//   campos.forEach(function (campo) {
// var td = document.createElement("td");
// td.textContent = campo.value; // O conteúdo de td vai receber o item campo + o seu valor.
//     tr.appendChild(td); // tr=linha vai receber como filho td=colum
//   });

//   var tdVolume = document.createElement("td");
//   tdVolume.textContent = campos[1].value * campos[2].value;

//   tr.appendChild(tdVolume);

//   tbody.appendChild(tr);

//   campos[0].value = "";
//   campos[1].value = 1;
//   campos[2].value = 0;

//   campos[0].focus(); // toda vez q incluimos uma negociação o formulário e limpo e o foco retorna para o campo 'data'.

// });
