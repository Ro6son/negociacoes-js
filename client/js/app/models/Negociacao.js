class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime()); // ao invés de retornar uma referência para variável data (this._data;).Eu vou criar um novo objeto 'new Date' que recebe no seu construtor getTime() que me retorna um numero gigante que representa minha data.
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this); //'data' é um objeto por isso este metodo não congela todos os atributos de um objeto. Aplicar programação defensiva!
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime()); // Estou criando uma nova data baseado na data da minha negociação (line-3). Como é um novo objeto se eu tentar alterar o valor por fora eu estarei modificando apenas a cópia e não o valor interno da propriedade. Agora a informamação esta segura! 'Programação defensiva'
  }

  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }
}

// Por 'convenção' a primeira letra do nome da nossa classe será sempre Maiúscula!
// Aqui estamos usando o mesmo nome do arquivo (Negociacao.js) porém não é uma regra, poderia ter sido qualquer outro nome.
// Importar classe no index <script src="js/app/models/Negociacao.js"></script>
// Definir os atributos da classe através da função constructor().
// Toda classe que possua um constructor precisa ser invocada com o operador 'new' caso contrário o JS não ira instanciar.
// Criar duas instancias diferentes de negociação no index cada uma com um valor diferente para testar.
// É o operador new que vai tornar o 'this' correspondete ao objeto criado.
// 'this' é uma variável implicita que sempre aponta para instancia que esta sendo executando naquele momento.

// Quando eu uso 'getVolume' para acessar os dados como leitura eu também posso transforma-lo em um 'get volume' assim toda vez q eu precisar acessar esse metodo eu não vou precisar escrever o getVolume apenas variavel.volume.
// Eu acesso o metodo get volume como 'Propriedade' desta forma eu não preciso usar '()' como a chamada de um metodo precisa. Por mais que a chamada apresentada seja uma propriedade por debaixo dos panos o JS está executando um metodo.
// Quando a minha propriedade é um Get-Leitura eu não posso atribuir a ela um valor. Desta forma se eu chamar variável.volume eu não vou conseguir altera-la pois a mesma é somente leitura. Mas nada impedi que eu acesse a variável diretamente e atribua um novo valor em JS pois aqui eu não tenho modificadores de acesso como JAVA (Private) para restringir o acesso a variável.
// Como fazer para que as propriedades da minha instância não sejem alteredas? Usando o Object.freeze(this) ou seja, congela o q estiver entre ('').
// Programação defensiva no Onjeto 'data'
