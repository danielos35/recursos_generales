/*
[Route("[controller]")]
- es utilizado para que la ruta siempre tenga el nombre del controlador, en caso de que este nombre se modifique, también se modifica el nombre de la ruta

[Route("api/[controller]")]
- Puedo indicarle una url en particular antes del controller

[("get/traerDatos")]
- Agrega una ruta particular solo para ese metodo

[("get/traerDatos")]
[("get/traerDatosDos")]
- Puedo tener multiples rutas para cualquier acción

[HttpGet]
[Route("[action]")]
- Permite utilizar el nombre del metodo como acción







*/ 