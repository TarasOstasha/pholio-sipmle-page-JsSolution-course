// Initialize with JavaScript
// var masonry_gryd = document.querySelector('.grid');
// var msnry = new Masonry(masonry_gryd, {
//     columnWidth: 220,
//     itemSelector: '.grid-item'
// });

//**-realize on native javascript-**//
var btnHeader = document.querySelector('.navbar__btn');
btnHeader.addEventListener('click', function () {
   var menu = document.querySelector('.navbar__menuHeader');
    menu.classList.toggle('open__menuHeader');
    this.classList.toggle('navbar__btnOpen');
});
//**-realize on jQuery-**//
$(document).ready(function () {
    // Initialize with jQuery
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    // $('.mylogo').click(function () {
    //     alert("ДЯКУЄМО ЗА ВАШУ УВАГУ НАШ САЙТ ЗНАХОДИТЬ НА СТАДІЇ РОЗРОБКИ НЕЗАБАРОМ ВІДКРИТТЯ ТОЖ WELCOME");
    // }); -- відміна

    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    })

    $('a.back-to-top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('#form-site').submit(function() {
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            // alert('Thanks for your email. \n We well contact you as soon as possible');
            toastr.success('Thanks for your email. \n We will contact you as soon as possible');
            $("#form-site").get(0).reset();
        });
        return false;
    });
});
