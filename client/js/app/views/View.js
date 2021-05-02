class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  template(modelo) {
    throw new Error('O método template deve ser implementado');
  }

  update(modelo) {
    this._elemento.innerHTML = this.template(modelo);
  }
}
