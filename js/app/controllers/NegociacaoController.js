class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document); // querySelector é uma função que pertence a document por isso precisamos associar o '$' ao metodo'bind()' que recebe document! - Referência jQuery.
    // Ao invés de criar variaveis. Iremos criar proprriedades para classe atribuindo 'this.' ao invés de uma variável.
    // Desta forma quando meu NegociaçãoController for criado pela 1x ele ira buscar os elementos/campos da nossa pág percorrendo o DOM. Então vai guardar os valores na propriedade da nossa classe. Assim percorremos menos o DOM e fazemos um chache das informações incluidas.
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView($("#negociacoesView"));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault(); // evita o comportamento padrão de event (subimt). | avoids the default event behavior (send)
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = "Negociação adicionada com sucesso!";
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = "1";
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}




