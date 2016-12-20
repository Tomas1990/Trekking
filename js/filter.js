$(document).ready(function() {

    $('#see-all').click(function (event) {
        event.preventDefault(),
        $('#men-check').toggle(),
        $('#women-check').toggle();
    });

    $('#men').click(function(){
        $('#men-check').toggle();
    });

    $('#women').click(function(){
        $('#women-check').toggle();
    });
});

