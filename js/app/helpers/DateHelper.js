class DateHelper {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static dataParaTexto(data) {
    //return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; // com template String
    // return  data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() // sem template String
    return `${data.getDate() < "10" ? "0" : ""}${data.getDate()}/${
      data.getMonth() + 1 < "10" ? "0" : ""
    }${data.getMonth() + 1}/${data.getFullYear()}`;
  }
  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("A data precisa estar no formato yyyy-mm-dd");

    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }
}

// Manipulando new Date - Expressão regular!
// let data = new Date(this._inputData.value.replace(/-/g, ",")); < --- Esta linha retorna o mesmo resultado que o metodo abaixo porém com menos linhas de código | This line returns the same result as the method below but with fewer lines of code.
// Trocar todas as ocorrencias que estiverem dentro do Hífen pelo caracter '-' (/-/) e o (g) significa que é uma instância global, por isso neste exemplo o '-' será substituido por uma virgula (",").

// Tranformando uma String em um Array com 3 elementos.

// let numeros = [10, 20, 30]
// let NovosNumeros = numeros.map(function (numeros) { return numeros + 10}); Aqui eu estou pegando o array numeros e criando um novo array manipulado com um novo critério que é a soma de 10 em cima de cada item dentro do array numeros.

// dataParaTexto
// Exemple 1
// let data = new Date(
//     ...this._inputData.value.split("-").map(function (item, indice) { obs: o map aceita receber como 2º parâmetro o 'indice' do elemento q ele esta varrendo.
//         if (indice == 1 ') { equivalente à 2º posição do array
//             return item - 1; retorna a segunda posição do array subtraindo 1.
//         }
//         return item;
//   })
// );
// console.log(data);
// }
// example 2
// let data = new Date(
//     ...this._inputData.value.split("-").map(function (item, indice) {
//          return item - indice  % 2
// => 0 % 2 = 0 (1º posição do array Ano) Retorna Item - 0 = não altera e retorna o valor atual
// => 1 % 2 = 1 (2º posição do array Mês) Retorna item - 1 = Subtrai 1 da 2º posição do Array
// => 2 % 2 = 0 (3º posição do array Dia) Retorna item - 0 = não altera e retorna o valor atual
// );
// console.log(data);
//};
