
//**-native javascript-**//
var btnHeader = document.querySelector('.navbar__btn');
btnHeader.addEventListener('click', function () {
    var menu = document.querySelector('.navbar__menuHeader');
    menu.classList.toggle('open__menuHeader');
    this.classList.toggle('navbar__btnOpen');
});
//**-realize on jQuery-**//
$(document).ready(function () {
    //**btn scroll up fade in on scroll**//
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    })
    // btn scroll up
    $('a.back-to-top').click(function () {
        console.log('works')
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //**scroll menu**//
    $('a:not(.left, .right, .back-to-top)[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
    });

    // portfolio carousel
        $('.owl-portfolio').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            responsive:{
                0:{
                    items: 2
                },
                600:{
                    items: 6
                },
                1000:{
                    items: 9
                }
            }
        });
    
    //technology carousel 
    $('.owl-brands').owlCarousel({
        loop: true,
        margin: -200,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        animateIn: true,
        responsive:{
            0:{
                items: 1.5
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

  
    // ** CONTACT FORM ** //
    $('#form-site').submit(function (e) {
        console.log(e)
        e.preventDefault();
        //validation -> make a function
        var name = $('[name="name"]').val();
        var phone = $('[name="phone"]').val();
        var email = $('[name="email"]').val();
        var nameReg = /^[a-zA-Z ]{2,30}$/;
        var phoneReg =  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var nameFormat = nameReg.test(name);
        var numberFormat = phoneReg.test(phone);
        var emailFormat = emailReg.test(email);
        if( !emailFormat ) {
            toastr.error('Please Fill Out Email'); 
            return
        }else if(!numberFormat) {
            toastr.error('Please Fill Out Correct Phone Number'); 
            return
        }else if(!nameFormat) {
            toastr.error('Please Fill Out Correct Name'); 
            return
        } else {
            $.ajax({
                type: "POST",
                url: "http://localhost:8000/email",
                data: $(this).serialize(),
            }).done(function () {
                toastr.success("Thanks for your email. \n I will contact you as soon as possible", "Notification");
                $("#form-site").get(0).reset();
                $("#myModal").modal("hide");
            }).fail(function () {
                toastr.error('ERROR');
            })
            return false;
        }
    });
    //close contact modal window
    //$("#btnClosePopup").click(function () {
    //  $("#myModal").modal("hide");
    //});


    // slideshow witch technology we are using
    // $(function () {
    //     var timeSlide;
    //     function goToSlide() {
    //         var listItem = $(".slideshow li")
            // listItem.each(function () {
            //     var i = $(this).next();
            //     i.length || (i = $(this).siblings(":first")),
            //         i.children(":first-child").appendTo($(this));
            // });

        //     listItem.each(function () {
        //         var next = $(this).next();
        //         if (!next.length) {
        //             next = $(this).siblings(':first');
        //         }
        //         next.children(':first-child').appendTo($(this));
        //     })
        // }
        // timeSlide = setInterval(goToSlide, 2500);
        // stop slider when on hover
        // $('.slideshow').on('mouseenter', function () {
            // stop animation
        //     clearInterval(timeSlide);
        // }).on('mouseleave', function () {
            // play animation
    //         timeSlide = setInterval(goToSlide, 2500);
    //     });
    // });





    //////
    particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
});
