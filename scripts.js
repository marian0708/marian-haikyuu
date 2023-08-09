function ocultarMostrar() {
    console.log("Acción Ocultar mostrar");
  
    var contenido = document.getElementById("contenidoOcultar");
    console.log("Contenido valor tiene " + contenido.hidden);
    if (contenido.hidden) {
      contenido.hidden = false;
    } else {
      contenido.hidden = true;
    }
  }