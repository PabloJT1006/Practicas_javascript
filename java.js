$(function(){
    let balon=0;
    let nombre_id="";
    $("#aniadir").click(function(){
       balon++;
       nombre_id="balon-"+balon;
       let image = $("<img>");

       image.attr('src', 'balon.png');
       image.attr('id', nombre_id);

       $('#cuadrado').append(image);
       
       
    image = document.getElementById(nombre_id);
/*image.onmousedown = function(){
    document.getElementById("cuadrado").style.backgroundColor="pink";
    
};*/

/*HAcer que se pueda arrastrar*/
    image.onmousedown = function(event){
    
    //Esto se hace mientras se este pulsando el boton 
    image.style.position="absolute";/*para que su posicion sea absoluta, que donde se mueva se quede*/

    

    /*Esta funcion dentro de de la evento (mousedown) se usa para que la pelota se mueva a donde este el raton*/
    //tanto pageX como pageY son las coordenadas del raton
    
    function moveAT(pageX,pageY){
        //se guarda el cuadra en esta variable
        let square=document.getElementById("cuadrado");
        let x=square.getBoundingClientRect().x;
        let y=square.getBoundingClientRect().y;
        
        image.style.left= pageX - x - image.offsetWidth  + 'px';
        //esto se le aplica el estilo izq(margen y eso)
        //a la cordenada del raton se le quita la mitad de la anchura de la imagen
        //lo que hace el raton se coloque en medio (ejex)
        // Ahora lo mismo pero con el ejeY
        image.style.top= pageY - y - image.offsetHeight + 'px';

    }

    

    //funcion para que la imagen se coloque abasolutamente bajo el cursor
    function onMouseMove(event){
        //aqui se guarda el cuadrao donde vamos poder mover las cosas
    
        
        //console.log(square.getBoundingClientRect().x);
        
        moveAT(event.pageX,event.pageY);
    }



    document.addEventListener("mousemove",onMouseMove);
    image.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        image.onmouseup = null;
      };

    image.ondragstart = function() {
        return false;
    };
    
};


  /*EL porque todos esta dentro de la funcion, el porque del event*/


    });
    
});


