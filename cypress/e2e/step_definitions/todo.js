import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTarea } from "../../pages/GestionTarea";

Given("visito la página de tareas", () => {
  gestionTarea.visitarPagina();
});

//Completar una tarea
Given("creo una tarea", () => {
  gestionTarea.agregarTarea('Hacer la compra');
});
When("hago click en la tarea", () => {
  gestionTarea.marcarTarea('Hacer la compra');
});
Then("se muestra como completada", () => {
  gestionTarea.comprobarTareaCompletada('Hacer la compra');
});


//Eliminar una tarea
When("hago click en el botón eliminar tarea", () => {
  gestionTarea.borrarTarea('Hacer la compra');
});
Then("la tarea ya no se muestra", () => {
  gestionTarea.comprobarTareaEliminada('Hacer la compra');
});

//Marcar todas las tareas como completadas
Given("creo varias tareas", () => {
  gestionTarea.agregarTarea('Hacer la compra');
  gestionTarea.agregarTarea('Llamar al banco');
  gestionTarea.agregarTarea('Ir al gimnasio');
});

When("marco todas las tareas", () => {
  gestionTarea.marcarTodasLasTareas(); 
});

Then("todas las tareas se muestran como completadas", () => {
  gestionTarea.comprobarTodasCompletadas();
});
