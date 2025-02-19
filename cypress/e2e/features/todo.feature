Feature: todo
  Scenario: Completar una tarea
    Given visito la página de tareas
    And creo una tarea
    When hago click en la tarea
    Then se muestra como completada

  Scenario: Eliminar una tarea
    Given visito la página de tareas
    And creo una tarea
    When hago click en el botón eliminar tarea
    Then la tarea ya no se muestra

  Scenario: Marcar todas las tareas como completadas
    Given visito la página de tareas
    And creo varias tareas
    When marco todas las tareas
    Then todas las tareas se muestran como completadas

  