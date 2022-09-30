var BetisController = (function () {
  /*declarar variables aqui para que no se reinnice cuando llamo a la fincion */
  let balon = 0;
  let nombre_id = "";

  return {
    config: {},

    init: function () {
      this.bind_listeners();
    },

    bind_listeners: function () {
      $("#aniadir").click(this.create_new_element);
    },

    create_new_element: function () {
      //Hacer que se ncremente el id, variable que vaya sumando

      let image = $("<img>");

      balon++;
      nombre_id = "balon-" + balon;

      image.attr("src", "balon.png");
      image.attr("id", nombre_id);
      $("#cuadrado").append(image);
      /*Se coge la imagen nada mas se genere para darle las propiedades de draggeable*/
      let imagen_actual = document.getElementById(nombre_id);
    
      BetisController.drag_listener(imagen_actual);
    },

    drag_listener: function (image) {
      /*Con absolute ni me aparece la imagen*/
      image.onmousedown = function(){
        image.style.position = "absolute";
        document.addEventListener(
            "mousemove",
            BetisController.onMouseMove(image)
          );
          
    
         
          
      };
      image.onmouseup = function () {
        document.removeEventListener(
          "mousemove",
          BetisController.onMouseMove(image)
        );
        image.onmouseup = null;
      };

      image.ondragstart = function () {
        return false;
      };
    
    },

    //(image)--> intencion de pasarle la image generada
    moveAT: function (pageX, pageY, image) {
      //se guarda el cuadrado en esta variable
      let square = document.getElementById("cuadrado");

      let x = square.getBoundingClientRect().x;
      let y = square.getBoundingClientRect().y;

      /*cuenta la cual*/
      image.style.left = pageX - x - image.offsetWidth + "px";

      image.style.top = pageY - y - image.offsetHeight + "px";
    },

    onMouseMove: function (image) {
      BetisController.moveAT(event.pageX, event.pageY, image);
    },
  };
})();
