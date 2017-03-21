$('document').ready(function() {
    // use the nav href links to navigate the page.
    $('nav').find('a').click(function(e) {
        e.preventDefault(); // we don't want to open '#About' or anything like that
        var section = $(this).attr('href'); // pull the value associated with href
        $('html, body').animate({
            scrollTop: $(section).offset().top
        });
    });

});

