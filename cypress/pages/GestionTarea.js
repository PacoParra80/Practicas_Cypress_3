export class GestionTarea {
   // Selectores
   elements = {
    inputNuevaTarea: () => cy.get('input.new-todo'),
    seleccionarTarea: (texto) => cy.contains('label', texto),
    barraHerramientas: () => cy.get('.todo-list li'),
    botonCompletas: () => cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a'),
    botonBorrar: function(texto) {
      return this.seleccionarTarea(texto).parent().find('button.destroy')
  },
    checkTarea: function(texto) {
      return this.seleccionarTarea(texto).parent().find('input.toggle')
  }
}

  // Métodos

  visitarPagina() {
      cy.visit('https://todomvc.com/examples/react/dist/');
  }

  agregarTarea(nombreTarea) {
    this.elements.inputNuevaTarea().click().type(`${nombreTarea}{enter}`);
  }

  borrarTarea(nombreTarea) {
    this.elements.botonBorrar(nombreTarea).click({ force: true });
  }

  marcarTarea(nombreTarea) {
    this.elements.checkTarea(nombreTarea).click();
  }

  comprobarTareaCompletada(nombreTarea) {
    this.elements.botonCompletas().click()
    this.elements.seleccionarTarea(nombreTarea).should('be.visible')
  }

}

export const gestionTarea = new GestionTarea();
