var BetisController = function() {
    return {
        config: {

        },
        
        init: function() {
            debugger;
            this.bind_listeners();
            console.log("hola");
        },

        bind_listeners: function() {
            $("#aniadir").click(this.create_new_element);

        },

        create_new_element: function() {
            let image = $("<img>");
            
            balon++;
            nombre_id="balon-"+balon;

            image.attr('src', 'balon.png');
            image.attr('id',nombre_id)

            image.on('mousein', BetisController.clicked_element);
            image.on('mouseout', BetisController.released_element);

            $('#cuadrado').append(image);           
        },

        drag_listener: function() {
            
        },

        clicked_element: function() {
            $(this).data('clicked', true);
        },

        released_element: function() {
            $(this).data('unclicked',true)
        }
    }
}();