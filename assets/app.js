// Initialize application
$(document).ready(function() {
    var click = 0
    $('body').click(function( event ) {
        event.stopPropagation();
        click++;
        switch (click) {
            case 1:
                $('.porsche').addClass('swipe-right');
                setTimeout(function () {
                    $('.map').addClass('map-travel-1');
                    setTimeout(function () {
                        $('.mini').addClass('active');
                    }, 220);
                }, 250);
                break;
            case 2:
                $('.mini').addClass('swipe-left');
                setTimeout(function () {
                    $('.map').addClass('map-travel-2');
                    setTimeout(function () {
                        $('.delorean').addClass('active');
                    }, 220);
                }, 250);
                break;
            case 3:
                $('.delorean').addClass('swipe-right');
                setTimeout(function () {
                    $('.map').addClass('map-travel-3');
                    setTimeout(function () {
                        $('.final').addClass('active');
                    }, 220);
                }, 250);
                break;
            default:
                console.log('nothing planned to happen.');
        };
    })
    console.log('ready.');
});