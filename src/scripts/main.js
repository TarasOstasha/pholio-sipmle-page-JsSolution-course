// Initialize with JavaScript
// var masonry_gryd = document.querySelector('.grid');
// var msnry = new Masonry(masonry_gryd, {
//     columnWidth: 220,
//     itemSelector: '.grid-item'
// });


var btnHeader = document.querySelector('.navbar__btn');
btnHeader.addEventListener('click', function () {
   var menu = document.querySelector('.navbar__menuHeader');
    menu.classList.toggle('open__menuHeader');
    this.classList.toggle('navbar__btnOpen');
});

$(document).ready(function () {
    // Initialize with jQuery
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    $('.logo').click(function () {
        alert("ДЯКУЄМО ЗА ВАШУ УВАГУ НАШ САЙТ ЗНАХОДИТЬ НА СТАДІЇ РОЗРОБКИ НЕЗАБАРОМ ВІДКРИТТЯ ТОЖ WELCOME");
    });
});
