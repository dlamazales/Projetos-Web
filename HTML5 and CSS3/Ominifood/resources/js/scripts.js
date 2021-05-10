$(document).ready(function(){

    /* sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky animate__animated animate__fadeIn');
        } else {
            $('nav').removeClass('sticky animate__animated animate__fadeIn');
        }
    },  {
        offset: '60px'
      });

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* animations on scroll */

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    },
    {
        offset: '55%'
    })

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '55%'
    })

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn')
    },
    {
        offset: '55%'
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__pulse')
    },
    {
        offset: '55%'
    })

    /* mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);

        if(document.getElementById('menu-icon').name === 'menu'){
            document.getElementById('menu-icon').name = 'close';
        } else {
            document.getElementById('menu-icon').name = 'menu';
        }
        


    })


});