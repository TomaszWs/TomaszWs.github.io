$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    $('#scrollToTop').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
  
    function manageSlides(slidesClassName, dotsClassName, prevClassName, nextClassName) {
      var slideIndex = 1;
  
      showSlides(slideIndex);
  
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
  
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
  
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName(slidesClassName);
        var dots = document.getElementsByClassName(dotsClassName);
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
  
      $(prevClassName).on('click', function() {
        plusSlides(-1);
      });
  
      $(nextClassName).on('click', function() {
        plusSlides(1);
      });
  
      $('.' + dotsClassName).on('click', function() {
        var dotIndex = $(this).index() + 1;
        currentSlide(dotIndex);
      });
    }
  
    manageSlides("mySlides", "dot", ".prev", ".next");
    manageSlides("mySlides2", "dot2", ".prev2", ".next2");
  });
  