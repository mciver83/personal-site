angular.module('andrewResume')
.controller('mainCtrl', function($scope, mainService){


  (function( $ ){

    $.fn.fitText = function( kompressor, options ) {

      // Setup options
      var compressor = kompressor || 1,
          settings = $.extend({
            'minFontSize' : Number.NEGATIVE_INFINITY,
            'maxFontSize' : Number.POSITIVE_INFINITY
          }, options);

      return this.each(function(){

        // Store the object
        var $this = $(this);

        // Resizer() resizes items based on the object width divided by the compressor * 10
        var resizer = function () {
          $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        };

        // Call once to set.
        resizer();

        // Call on resize. Opera debounces their resize by default.
        $(window).on('resize.fittext orientationchange.fittext', resizer);

      });

    };

  })( jQuery );

  (function($) {
      "use strict"; // Start of use strict

      // jQuery for page scrolling feature - requires jQuery Easing plugin
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top - 50)
          }, 1250, 'easeInOutExpo');
          event.preventDefault();
      });

      // Highlight the top nav as scrolling occurs
      $('body').scrollspy({
          target: '.navbar-fixed-top',
          offset: 51
      });

      // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
      });

      // Fit Text Plugin for Main Header
      $("h1").fitText(
          1.2, {
              minFontSize: '35px',
              maxFontSize: '65px'
          }
      );

      // Offset for Main Navigation
      $('#mainNav').affix({
          offset: {
              top: 100
          }
      });

      // Initialize WOW.js Scrolling Animations
      new WOW().init();

  })(jQuery); // End of use strict

  ( function( window ) {

  'use strict';

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }

  })( window );

  $('#modal').on('show.bs.modal', function () {
         $(this).find('.modal-body').css({
                width:'auto', //probably not needed
                height:'auto', //probably not needed
                'max-height':'100%'
         });
  });


  $scope.sendMeAnEmail = function(firstName, lastName, fromEmail, emailSubject, message) {
    mainService.sendMeAnEmail(firstName, lastName, fromEmail, emailSubject, message)
    .then(function(response){
      $scope.firstName = '';
      $scope.lastName = '';
      $scope.fromEmail = '';
      $scope.emailSubject = '';
      $scope.message = '';
    });
  };

});
