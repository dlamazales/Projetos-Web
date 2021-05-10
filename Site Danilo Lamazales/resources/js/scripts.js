$(document).ready(function(){

    /* Sticky Nav*/

    /* sticky navigation */
    $('.js--section-about-me').waypoint(function(direction){
        if (direction == "down"){
            document.getElementById('nav').style.position='fixed'
            document.getElementById('nav').style.top='10%'
        } else {
            document.getElementById('nav').style.position='absolute'
            document.getElementById('nav').style.top='100%'
        }
    }, 
    {
        offset: '10%'
    });



    /* Scroll Animations */
    $('.js--about-me').waypoint(function(direction){
        $('.js--about-me').addClass('animate__animated animate__fadeIn')
    },
    {
        offset: '55%'
    })

    $('.js--name').waypoint(function(direction){
        $('.js--name').addClass('animate__animated animate__zoomIn')
    },
    {
        offset: '55%'
    })
})