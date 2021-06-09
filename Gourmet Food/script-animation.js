$(document).ready(function () {
  /* Side numbers animation */
  number = document.getElementById("side-n");
  n = 1;
  transform = 100;
  $(".js--n").waypoint(
    function (direction) {
      if (direction === "down") {
        transform += 100;
        n++;
        number.style.transform = "translateY(" + transform + "%)";
        number.textContent = "0" + n;
      } else {
        transform -= 100;
        n--;
        number.style.transform = "translateY(" + transform + "%)";
        number.textContent = "0" + n;
      }
    },
    {
      offset: "40%",
    }
  );

  /* Scroll Animations */
  $(".js--commu-1").waypoint(
    function (direction) {
      $(".js--commu-1").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "100%",
    }
  );

  $(".js--commu-2").waypoint(
    function (direction) {
      $(".js--commu-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "100%",
    }
  );

  $(".js--commu-3").waypoint(
    function (direction) {
      $(".js--commu-3").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "100%",
    }
  );

  $(window).on("load scroll", function () {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.2 + "px, 0)",
        });
      }
    });
  });

  $(window).on("load scroll", function () {
    var parallaxElement = $(".parallax_scroll-neg"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + -(scrolled * -0.4) * 2.2 + "px, 0)",
        });
      }
    });
  });

  /*  recipes transform */
  recipes = document.getElementById("recipes");
  $(".recipes__arrows--right").click(function () {
    recipes.style.transform = "translateX(-50%)";
    $(".recipes__arrows--left").css("color", "black");
    $(this).css("color", "#767676");
  });

  $(".recipes__arrows--left").click(function () {
    recipes.style.transform = "translateX(0%)";
    $(".recipes__arrows--right").css("color", "black");
    $(this).css("color", "#767676");
  });
});
