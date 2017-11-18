// Initialize application
$(document).ready(function() {
    var click = 0
    $('body').click(function( event ) {
        event.stopPropagation();
        click++;
        switch (click) {
            case 1:
                $('.porsche').addClass('swipe-left');
                setTimeout(function () {
                    $('.map').addClass('map-travel-1');
                    setTimeout(function () {
                        $('.minhi').addClass('minhi-active');
                    }, 220);
                }, 250);
                break;
            case 2:
                $('.minhi').addClass('swipe-right');
                break;
            default:
                console.log('nothing planned to happen.');
        };
    })
    console.log('ready.');
});