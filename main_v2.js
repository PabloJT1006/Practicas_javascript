

var BetisController = function() {
    //declarar variables aqui para que no se reinnice cuando llamo a la fincion 
    let balon=0;
    let nombre_id="";
    return {
        
        config: {
            
        },
        
        init: function() {
            this.bind_listeners();
        },

        bind_listeners: function() {
            $("#aniadir").click(this.create_new_element);


        },

        create_new_element: function() {
            //Hacer que se ncremente el id, variable que vaya sumando
            
            let image = $("<img>");
            
            balon++;
            nombre_id="balon-"+balon;

            image.attr('src', 'balon.png');
            image.attr('id',nombre_id)
            /*intencion que se ejecute el el drag_lstener con la imagen generada
            para darle la propieda de arrastable a cada imagen  conforme se genere*/
            image.on('mousedown',BetisController.drag_listener(image));

            $('#cuadrado').append(image);           
        },

        drag_listener: function(imagen) {
            document.addEventListener("mousemove", BetisController.onMouseMove(imagen));
            imagen.onmouseup = function () {
                document.removeEventListener('mousemove', BetisController.onMouseMove(imagen));
                imagen.onmouseup = null;
            };

            imagen.ondragstart = function () {
                return false;
            };
        },


        //(imagen)--> intencion de pasarle la imagen generada
        moveAT: function(pageX, pageY,imagen) {
            //se guarda el cuadra en esta variable
            let square = document.getElementById("cuadrado");
            let x = square.getBoundingClientRect().x;
            let y = square.getBoundingClientRect().y;
            
            /*cuenta la cual*/ 
            imagen.style.left = pageX - x - imagen.offsetWidth + 'px';
           
            imagen.style.top = pageY - y - imagen.offsetHeight + 'px';

        },

        onMouseMove: function(imagen) {
           
            BetisController.moveAT(event.pageX, event.pageY,imagen);
        }
    }
}();