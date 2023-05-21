$(document).ready(function () {
     $(".owl-carousel").owlCarousel({
        smartSpeed: 3000,
     loop: true,
     margin: 0,
     autoplay: true,
     autoplayTimeout: 2000,
     responsive: {
        0: { 
        items: 2
        },
    340: {
     items: 2
     },
     1000: {
     items: 5
    }
     }
     });
    });
    