class NegociacoesView {
  constructor(elemento) {
    console.log(elemento);
    this._elemento = elemento;
  }

  _template(modelo) {
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
                ${modelo.negociacoes
                  .map((negociacao) => {
                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(
                              negociacao.data
                            )}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `;
                  })
                  .join('')}
            </tbody>

            <tfoot></tfoot>
            </table>
        `;
  }

  update(modelo) {
    this._elemento.innerHTML = this._template(modelo);
  }
}
