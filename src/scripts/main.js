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
    
    //**btn scroll up fade in on scroll**//
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    })
    // btn scroll up
    $('a.back-to-top').click(function() {
        console.log('works')
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //**scroll menu**//
    $('a:not(.left, .right, .back-to-top)[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false;
    });

    //**submit**//
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


    //////
    particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
});
