(function ($) {
  $(function () {
    /***** scrol to section *****/
    $(".jq--scroll-about-us").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--about-us").offset().top },
        1000
      );
    });

    $(".jq--scroll-WWD").click(function () {
      $("html, body").animate({ scrollTop: $(".jq--WWD").offset().top }, 1000);
    });

    $(".jq--scroll-galery").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--galery").offset().top },
        1000
      );
    });

    $(".jq--scroll-contact").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--contact").offset().top },
        1000
      );
    });

    $(".jq--scroll-reviews").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--reviews").offset().top },
        1000
      );
    });
    /*Nefunguje hamburger menu nevím kde je problém*/
    /***** Mobile menu *****/
    $(".jq--nav-icon").click(function () {
      //$(".nav-background").slideToggle(1000); stačí tohle zakomentářovat (vysvětlení viz discord)
      $(".mobile-nav-back").slideToggle(1000);
      $(".nav-bar ul").slideToggle(1000);
    });

    /***** Podmínky *****/
    //pozor, měl jsi tu špatně odkazy na ikonku u menu - images/..., ve skutečnosti jsou v icons/...
    $(".jq--img-hamburger").click(function () {
      if ($(".jq--img-hamburger").attr("src") === "icons/hamburgerMenu.png") {
        $($(".jq--img-hamburger").attr("src", "icons/CrossMenu.png"));
      } else {
        $($(".jq--img-hamburger").attr("src", "icons/hamburgerMenu.png"));
      }
    });
  });
})(jQuery);
