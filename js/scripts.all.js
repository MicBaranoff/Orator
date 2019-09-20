(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

    var swiperTrainers = new Swiper('.studying_slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: '.studying_slider_arrows .arrow-next',
          prevEl: '.studying_slider_arrows .arrow-prev',
        },
        
      });

      var swiperPreReviews = new Swiper('.prereviews_slider', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
          nextEl: '.prereviews_slider_arrows .arrow-next',
          prevEl: '.prereviews_slider_arrows .arrow-prev',
        },
        
      });

      var swiperPreReviews = new Swiper('.reviewsphotos_slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        freeMode: true,
        navigation: {
          nextEl: '.reviewsphotos_slider_arrows .arrow-next',
          prevEl: '.reviewsphotos_slider_arrows .arrow-prev',
        },
        
      });

      $('.whywe_slider').slick({
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      
      $('.reviews_sliders_box_nav > span').click(function(){
        $('.reviews_sliders_box_nav > span').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr('data-id');
        $('.slide-tab').removeClass('activee');
        $('.slide-tab[id='+ itemId +']').addClass('activee')
        
      });

      $('.whywe_slider_nav > .item').click(function(){
        $('.whywe_slider_nav > .item').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr('data-id');
        $('.whywe_slider').slick('slickGoTo', itemId)
        
      });

      $('.reviews_slider .slide a.showall').click(function(){
        $(this).parent().find('.text').addClass('active');
        $(this).hide();
        $(this).parent().find('a.hideall').show();
      });

      $('.reviews_slider .slide a.hideall').click(function(){
        $(this).parent().find('.text').removeClass('active');
        $(this).hide();
        $(this).parent().find('a.showall').show();
      });

      $('.burger').click(function(){
        $('nav.mobile').addClass('activee');
      });

      $('nav.mobile .top .closer').click(function(){
        $('nav.mobile').removeClass('activee');
      });

      $('.reviews_slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '.reviews_slider_container a.arrow-prev',
        nextArrow: '.reviews_slider_container a.arrow-next',
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.reviews_slider_nav'
      });

      $('.reviews_slider_nav').slick({
        dots: false,
        arrows: true,
        prevArrow: '.reviews_slider_nav_box a.arrow-prev',
        nextArrow: '.reviews_slider_nav_box a.arrow-next',
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.reviews_slider',
        responsive: [ {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
        breakpoint: 475,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      $('.video_slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '.video_slider_nav a.arrow-prev',
        nextArrow: '.video_slider_nav a.arrow-next',
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [ {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      $('.video_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.video_slider_nav .counter span.count').text((currentSlide+1))
      });

      

     

var brands_slider1_arrs_prev = $('.brands_slider1').parent().find('a.arrow-prev')
var brands_slider1_arrs_next = $('.brands_slider1').parent().find('a.arrow-next')
      $('.brands_slider1').slick({
        dots: false,
        arrows: true,
        prevArrow: brands_slider1_arrs_prev,
        nextArrow: brands_slider1_arrs_next,
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        responsive: [ {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      var brands_slider2_arrs_prev = $('.brands_slider2').parent().find('a.arrow-prev')
var brands_slider2_arrs_next = $('.brands_slider2').parent().find('a.arrow-next')
      $('.brands_slider2').slick({
        dots: false,
        arrows: true,
        prevArrow: brands_slider2_arrs_prev,
        nextArrow: brands_slider2_arrs_next,
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        responsive: [ {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      var brands_slider3_arrs_prev = $('.brands_slider3').parent().find('a.arrow-prev')
var brands_slider3_arrs_next = $('.brands_slider3').parent().find('a.arrow-next')
      $('.brands_slider3').slick({
        dots: false,
        arrows: true,
        prevArrow: brands_slider3_arrs_prev,
        nextArrow: brands_slider3_arrs_next,
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        responsive: [ {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      var brands_slider4_arrs_prev = $('.brands_slider4').parent().find('a.arrow-prev')
      var brands_slider4_arrs_next = $('.brands_slider4').parent().find('a.arrow-next')
      $('.brands_slider4').slick({
        dots: false,
        arrows: true,
        prevArrow: brands_slider4_arrs_prev,
        nextArrow: brands_slider4_arrs_next,
        infinite: true,
        pauseOnHover: false,
        speed: 600,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        responsive: [ {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      $('[modal-form-opener]').click(function(){
        $('.modal-form').addClass('active');
      })

      $('.modal-form .closer').click(function(){
        $('.modal-form').removeClass('active');
      })

      $('[modal-contacts-opener]').click(function(){
        $('.modal-contacts').addClass('active');
      })

      $('.modal-contacts .closer').click(function(){
        $('.modal-contacts').removeClass('active');
      })




      

      $('.brands_slider_nav > .item').click(function(){
        $('.brands_slider_nav > .item').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr('data-id');
        $('.brands_slider_container .brands_slider_container_tab').removeClass('active');
        $('.brands_slider_container .brands_slider_container_tab[id='+ itemId +']').addClass('active');
      });


      if($(window).width()< 768){
        $('.destinations .holder .photos ').addClass('photos_slider1');
      }

      if($(window).width()< 768){
        $('nav').addClass('mobile');
      } else  $('nav').removeClass('mobile');

      $('.photos_slider1').slick({
        dots: true,
        
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        fade: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
      });


      $('.mapnav > .item').click(function(){
        $('.mapnav > .item').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr('data-id');
        $('.maps .map').removeClass('active');
        $('.maps .map[id='+ itemId +']').addClass('active');
        
      });

      $(function(){
        $("#phone").mask("+38(099) 999-9999");
      });


      $(window).scroll(function () {
        var offset = $('section.besttraining').offset().top-300;
        var scrolled = ($(window).scrollTop() - offset)  * .002;    
        $('section.besttraining').css('background-position', '10% ' + 150 *  scrolled + 'px');
    });

    $(window).scroll(function () {
      var offset = $('section.besttraining').offset().top-300;
      var scrolled = ($(window).scrollTop() - offset)  * .002;    
      $('section.besttraining .parallax2').css('background-position', '100% ' + 250 *  scrolled + 'px');
  });


  //   $(window).scroll(function () {
  //     var offset = ($('section.logos').offset().top)-1200;
  //     var scrolled = ($(window).scrollTop() - offset)  * .002;    
  //     $('section.logos .holder img').css('transform', 'translateX(' + 450 *  -scrolled + 'px)');
  // });

  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if(scrolled>=710){
      $('nav').addClass('active');
    } else  $('nav:not(.mobile)').removeClass('active');
  });

  $('input.citycheck').on('change', function(){
    if($(this).prop('checked')){
      $('.inputs').css('display', 'block');
    }else{
      $('.inputs').css('display', 'none');
    }
    });




    
    $('.brands_slider .slide').click(function() {
        $('.zoom-img').fadeIn();
        $('.zoom-img').css('display', 'flex');
        $('.zoom-img img').attr('src', $(this).find('img').attr('src'));
        $('.zoom-img img').data('index', $(this).data('slick-index'));
    });

    $('.reviewsphotos_slider .swiper-slide').click(function() {
      $('.zoom-img').fadeIn();
      $('.zoom-img').css('display', 'flex');
      $('.zoom-img img').attr('src', $(this).find('img').attr('src'));
      $('.zoom-img img').data('index', $(this).attr('id'));
  });
    $('.zoom-img img').click(function() {
      $('.zoom-img').fadeOut();
    });

    $('.zoom-img .closer').click(function() {
      $('.zoom-img').fadeOut();
    });
      $('#zoom-prev').click(function () {
          var index = parseFloat(parseFloat($('.zoom-img img').data('index')) - 1);
          $('.zoom-img img').attr('src', $('.brands_slider .slide[data-slick-index="' + index + '"]').find('img').attr('src'));
          $('.zoom-img img').attr('src', $('.reviewsphotos_slider .swiper-wrapper .swiper-slide[id="' + index + '"]').find('img').attr('src'));
          $('.zoom-img img').data('index', index);
      });
      $('#zoom-next').click(function () {
          var index = parseFloat(parseFloat($('.zoom-img img').data('index')) + 1);
          $('.zoom-img img').attr('src', $('.brands_slider .slide[data-slick-index="' + index + '"]').find('img').attr('src'));
          $('.zoom-img img').attr('src', $('.reviewsphotos_slider .swiper-wrapper .swiper-slide[id="' + index + '"]').find('img').attr('src'));
          $('.zoom-img img').data('index', index);
      });

    $('form label .place').click(function(){
      $('form label .place').removeClass('active');
      $(this).addClass('active');
    })
      
});
},{}]},{},[1]);
