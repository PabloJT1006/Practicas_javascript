$(function(){
    let balon=0;
    let nombre_id="";
    $("#aniadir").click(function(){
       balon++;
       nombre_id="balon-"+balon;
       $('#cuadrado').append('<img id="'+nombre_id+'" src="balon.png" alt="">');
       
       
       let image = document.getElementById(nombre_id);
    

image.onmousedown = function(){
    
     
    image.style.position="absolute";

    

    
    
    function moveAT(pageX,pageY,){
        let square=document.getElementById("cuadrado");
        let x=square.getBoundingClientRect().x;
        let y=square.getBoundingClientRect().y;
        
        image.style.left= pageX - x - image.offsetWidth /2 + 'px';
      
        image.style.top= pageY - y - image.offsetHeight /2 + 'px';

    }

    

    function onMouseMove(){
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




    });
    
});




