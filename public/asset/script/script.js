var Piot;

(function ($, window, document, undefined) {
  "use strict";

  /**
   * Object for namespacing theme functions.
   */

  Piot = {
    /**
     * Initialiser.
     */

    init: function () {
      // Piot.initHero();
      Piot.initTabs();
      Piot.initProducts();
      Piot.initScrollMagic();
      Piot.initNav();
      Piot.initSwiper();
      // Piot.initIsotope();
      Piot.initScroll();
      Piot.initLoaded();
      Piot.initScrollToLinks();
      Piot.initResponsiveIframes();
      Piot.initForms();
    },

    /**
     * Teammember Tabs
     */

    initTabs: function () {
      var btn = $(".btn-tab-toggle-link");
      var tabs = $(".tab-content");

      var maxHeight = 0;
      tabs.each(function () {
        if (maxHeight < $(this).height()) {
          maxHeight = $(this).height();
        }
      });

      btn.click(function (e) {
        e.preventDefault();

        var id = $(this).attr("href");
        var thisTab = $(id);

        if ($(this).hasClass("active")) {
          btn.removeClass("active");
          tabs.removeClass("active");
          $(".teammember").removeClass("active");
          $(".tab-content-wrap").height(0);
        } else {
          btn.removeClass("active");
          tabs.removeClass("show active");
          $(".teammember").removeClass("active");
          $(".tab-content-wrap").height(maxHeight);
          $(this).addClass("active");
          thisTab.addClass("show active");
          $(this).closest(".teammember").addClass("active");
        }
      });
    },

    /**
     * Products
     */

    initProducts: function () {
      var gallery = $(".product-gallery");
      var offset = gallery.offset().left;
      var width = $(window).width() - offset;

      var even = $(".product.even .product-gallery");
      var evenOffset = even.offset().left;

      gallery.width(width);
      even.css({
        transform: "translateX(-" + evenOffset + "px)",
      });
    },

    /**
     * ScrollMagic
     */

    initScrollMagic: function () {
      var logo = $("#footer .logo-hero");
      var distance = logo.height();
      var duration = distance;
      var controller = new ScrollMagic.Controller();
      var stickHeight =
        $("#footer .stick-top")[0].getBoundingClientRect().height;
      var scale = (distance + stickHeight) / stickHeight;

      // Blocks — Sm/Lg
      var scene = new ScrollMagic.Scene({
        duration: $(window).height() * 1,
      })
        // .setTween(".anim-blocks-0", {css: {transform: 'translate(-100%, 0px) scaleY(1)'}})
        .setTween(".anim-blocks-0", {
          css: {
            transform: "translate3d(0,0,0) scaleY(1)",
          },
        })
        .addTo(controller);

      // Block — Up
      var sceneFull = new ScrollMagic.Scene({
        triggerElement: ".anim-block-up",
        duration: $(window).height() * 1,
      })
        .setTween(".anim-block-up", {
          css: {
            transform: "translate3d(-50vw,0,0) scaleY(0.35)",
          },
        })
        .addTo(controller);
      sceneFull.triggerHook(0.9);

      // Block — Down
      var sceneFull = new ScrollMagic.Scene({
        triggerElement: ".anim-block-down",
        duration: $(window).height() * 1,
      })
        .setTween(".anim-block-down", {
          css: {
            transform: "translate3d(0,0,0) scaleY(1.65)",
          },
        })
        .addTo(controller);
      sceneFull.triggerHook(0.9);

      // Blocks — Sm/Lg
      var sceneBlack = new ScrollMagic.Scene({
        triggerElement: ".anim-blocks-3",
        duration: $(window).height() * 1,
      })
        .setTween(".anim-blocks-3", {
          css: {
            transform: "translate3d(0,0,0) scaleY(-1)",
          },
        })
        .addTo(controller);
      sceneBlack.triggerHook(0.9);

      // Blocks — Sm/Lg
      var sceneDown = new ScrollMagic.Scene({
        triggerElement: ".anim-blocks-3-down",
        duration: $(window).height() * 1,
      })
        .setTween(".anim-blocks-3-down", {
          css: {
            transform: "translate3d(0,0,0) scaleY(1)",
          },
        })
        .addTo(controller);
      sceneDown.triggerHook(0.9);

      // Blocks — Sm/Lg
      var sceneBlack = new ScrollMagic.Scene({
        triggerElement: ".anim-blocks-5",
        duration: $(window).height() * 1,
      })
        .setTween(".anim-blocks-5", {
          css: {
            transform: "translate3d(0,0,0) scaleY(-1)",
          },
        })
        .addTo(controller);
      sceneBlack.triggerHook(0.9);

      var count = 0;
      $(".fancy-text-wrap").each(function () {
        var offset =
          $(".fancy-text-wrap-" + count).offset().top +
          $(".fancy-text-wrap-" + count).height();

        if ($(window).width() < 576) {
          var rand = Math.floor(Math.random() * 201) - 100;

          if (rand > -50 && rand < 50) {
            var perc = 50 / rand;
            var rand = rand * perc;
          }
        } else {
          var rand = Math.floor(Math.random() * 401) - 200;

          // Ensure the value is never too low (between -100 to 100)
          if (rand > -100 && rand < 100) {
            var perc = 100 / rand;
            var rand = rand * perc;
          }
        }

        $(".fancy-text-wrap-" + count).attr("data-rand", rand);
        var sceneFancy = new ScrollMagic.Scene({
          duration: $(window).height() * 1,
          offset: offset - $(window).height(),
        })
          .setTween(".fancy-text-wrap-" + count, {
            css: {
              transform: "translateY(" + rand + "px)",
            },
          })
          .addTo(controller);

        count++;
      });
    },

    /**
     * Nav
     */

    initNav: function () {
      var toggle = $(".nav-toggle");
      var contact = $(".contact-toggle");
      var nav = $(".menu");
      var navItem = $(".menu-item");

      function hide_nav() {
        nav.addClass("hiding");
        setTimeout(function () {
          nav.removeClass("hiding");
        }, 2100);
      }

      toggle.width(toggle.outerHeight());
      console.log("width resized");

      toggle.click(function () {
        if (
          $("body").hasClass("nav-active") ||
          $("body").hasClass("contact-active")
        ) {
          hide_nav();

          $("body").removeClass("nav-active");
          $("body").removeClass("contact-active");
        } else {
          $("body").addClass("nav-active");
          $("body").addClass("transitioning");
        }

        setTimeout(function () {
          $("body").removeClass("transitioning");
        }, 2100);
      });

      contact.click(function () {
        if ($("body").hasClass("nav-active")) {
          hide_nav();
        }

        $("body").removeClass("nav-active");
        $("body").toggleClass("contact-active");
      });

      $(".contact-bg").click(function () {
        $("body").removeClass("contact-active");
      });

      navItem.click(function () {
        hide_nav();
        $("body").toggleClass("nav-active");
      });
    },

    /**
     * Swiper
     */

    initSwiper: function () {
      if ($(".swiper-container").length) {
        var swiper = new Swiper(".swiper-container", {
          speed: 400,
          loop: false,
          spaceBetween: 100,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }

      if ($(".swiper-container-product").length) {
        var swiper = new Swiper(".swiper-container-product", {
          speed: 400,
          effect: "fade",
          // loop: true,
          // autoplay: {
          //     delay: Math.floor(Math.random() * (3500 - 2000 + 1)) + 2000,
          // },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }
    },

    /**
     * Isotope
     */

    initIsotope: function () {
      var filterBtn = $(".filter-btn");

      var grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });

      filterBtn.click(function () {
        var attr = $(this).attr("data-filter");
        filterBtn.removeClass("active");
        $(this).addClass("active");
        grid.isotope({
          filter: attr,
        });
      });
    },

    /**
     * Scroll FX
     */

    initScroll: function () {
      var lastScrollTop = 0;
      var fade = $(
        ".fade-in-scroll, .fade-up-scroll, .fade-right-scroll, .fade-left-scroll, .fade-children-delayed, .fade-children-delayed > *, .fade-children-delayed-all *"
      );

      $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        // Header effect
        var header = $("#header");
        if (scrollTop < 50) {
          header.removeClass("unpinned");
        } else if (scrollTop > lastScrollTop) {
          header.addClass("unpinned");
        } else {
          header.removeClass("unpinned");
        }

        lastScrollTop = scrollTop;
      });

      if (fade.length) {
        $(window).scroll(function () {
          var scrollTop = $(window).scrollTop();
          var scrolled = scrollTop + $(window).height();

          fade.each(function () {
            var fadeTop = Math.round($(this).offset().top);

            if ($(this).hasClass("fade-down")) {
              $(this).addClass("active");
            }

            if ($(window).width() > 576) {
              if (scrolled > fadeTop + 200) {
                $(this).addClass("active");
              } else {
                // $(this).removeClass( 'active' );
              }
            } else {
              if (scrolled > fadeTop + 50) {
                $(this).addClass("active");
              } else {
                // $(this).removeClass( 'active' );
              }
            }
          });
        });
      }
    },

    /**
     * Effects/classes to apply on-load
     */

    initLoaded: function () {
      var body = $("body");
      body.addClass("loaded");

      var link = $("a");
      link.click(function () {
        if (!$(this).attr("target") && !$(this).attr("data-internal")) {
          // body.removeClass('loaded');
        }
      });
    },

    /**
     * Init scroll to links
     */

    initScrollToLinks: function () {
      $(".scroll-to, .menu-item a").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        var target = href ? $(href).offset().top : 0;

        setTimeout(function () {
          $("body,html").stop().animate(
            {
              scrollTop: target,
            },
            1500,
            "swing"
          );
          $(this).blur();
        }, 1000);
      });
    },

    /**
     * Automatically add wrappers to iframes so that they can be made responsive and maintain their aspect ratio
     */

    initResponsiveIframes: function () {
      $("iframe").each(function () {
        if (!$(this).parent().hasClass("iframe-wrapper")) {
          if ($(this).parent().is("p")) {
            $(this).unwrap();
          }

          // apply responsive aspect ratio to wrapper
          var width = $(this).attr("width");
          var height = $(this).attr("height");
          if (
            width &&
            height &&
            width.indexOf("%") === -1 &&
            height.indexOf("%") === -1
          ) {
            $(this).wrap('<div class="iframe-wrapper"></div>');
            $(this)
              .parent()
              .css(
                "padding-top",
                (parseInt(height) / parseInt(width)) * 100 + "%"
              );
          }
        }
      });
    },

    /**
     * Init form related methods
     */

    initForms: function () {
      Piot.initMaterialFormLabels();
      Piot.initWPCF7ButtonReplacement();
    },

    /**
     * Add focus class for sweet Google material design label behaviour
     */

    initMaterialFormLabels: function () {
      var material_inputs_selector =
        ".form-group input, .form-group textarea, .form-group select";
      var material_inputs = $(material_inputs_selector);

      // Keep listening for browser autofill
      var interval_total = 0;
      var interval = setInterval(function () {
        material_inputs = $(material_inputs_selector);
        material_inputs.each(function () {
          var elem = $(this);
          if (elem.val() && elem.attr("type") !== "checkbox") {
            elem.change().trigger("blur");
          }
        });
        interval_total += 250;
        if (interval_total > 1000) {
          clearInterval(interval);
        }
      }, 250);

      $("body").on("focus", material_inputs_selector, function () {
        $(this)
          .parents(".form-group")
          .addClass("non-empty")
          .addClass("focused");
      });

      $("body").on("blur", material_inputs_selector, function () {
        var parent = $(this).parents(".form-group");
        if ($(this).val()) {
          parent.addClass("non-empty");
        } else {
          parent.removeClass("non-empty");
        }
        parent.removeClass("focused");
      });

      $("body").on("change", material_inputs_selector, function () {
        $(this).blur();
      });

      // Set WPCF7 submit to reset form
      document.addEventListener(
        "wpcf7submit",
        function () {
          setTimeout(function () {
            $(material_inputs_selector).change();
          }, 100);
        },
        false
      );
    },

    /**
     * Replace contact form 7 submit with button
     */

    initWPCF7ButtonReplacement: function () {
      var btn = $('.wpcf7-form input[type="submit"]');

      if (btn.length) {
        btn.replaceWith(
          '<button type="submit" class="' +
            btn.attr("class") +
            '">' +
            btn.val() +
            "</button>"
        );
      }
    },
  };

  /**
   * Run the initialiser
   */

  $(document).ready(function () {
    Piot.init();
  });

  $(window).on("resize", function () {
    setTimeout(function () {
      Piot.initNav();
    }, 2000);
  });

  $(window).on("load", function () {
    $(window).scroll();
  });
})(jQuery, window, document);
