var HalloweenController = function() {
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
            let image = $("<img>");

            image.attr('src', 'balon.png');

            image.on('mousein', HalloweenController.clicked_element);
            image.on('mouseout', HalloweenController.released_element);

            $('#cuadrado').append(image);           
        },

        drag_listener: function() {
            
        },

        clicked_element: function() {
            $(this).data('clicked', true);
        },

        released_element: function() {
            $(this).data('clicked',false)
        }
    }
}