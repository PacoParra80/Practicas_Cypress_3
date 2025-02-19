import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTarea } from "../../pages/GestionTarea";

Given("creo la tarea", () => {
  gestionTarea.visitarPagina();
  gestionTarea.agregarTarea('Hacer la compra');
});
When("hago click en la tarea", () => {
  gestionTarea.marcarTarea('Hacer la compra');
});
Then("se muestra como completada", () => {
  gestionTarea.comprobarTareaCompletada('Hacer la compra');
});
