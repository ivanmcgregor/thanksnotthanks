// Initialize application
$(document).ready(function() {
    var click = 0
    $('body').click(function( event ) {
        event.stopPropagation();
        click++;
        switch (click) {
            case 1:
                console.log('clicked 1');
                break;
            case 2:
                console.log('clicked 2');
                break;
            default:
                console.log('nothing planned to happen.');
        };
    })
    console.log('ready.');


});