class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
            ${model.negociacoes
              .map((n) => {
                return `
                    <tr> 
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    
                    </tr>
                `;
              })
              .join("")}
        </tbody>

        <tfoot>
            <td colspan='3'>Total</td>
            <td>${
              model.negociacoes.reduce((total, n) => total + n.volume, 0.0)

              // Exemple 1
              // model.negociacoes.reduce(function(total, n) {
              //     return total + n.volume;
              // }, 0.0)

              // Exemple 2

              // (function () {
              //     let total = 0;
              //     model.negociacoes.forEach((n) => (total += n.volume));
              //     return total;
              // })() //IIFE Recurso pra criar escopo em JS. Aqui eu estou colocando todo o bloco dentro da minha expressão ${} e executando atraves da chamada () que resulta no valor contido na expressão ForEach que nos retorna o valor total da variável total.
            }</td>
        </tfoot>

 </table>
        `;
  }
}
