$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        paginationNumbers: true,
        navigation: true,
        navigationText: ['<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'],
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        responsive : true
        

    });

    $(".owl-page").css('display','none');
});

$(document).ready(function() {

    $("#owl-demo-2").owlCarousel({
        paginationNumbers: true,
        navigation: true,
        navigationText: ['<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'],
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        responsive : true


    });

    $(".owl-page-2").css('display','none');
});
