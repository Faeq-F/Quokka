(function ($) {
  $(function () {
    $(window).on("scroll", function () {
      fnOnScroll();
    });

    $(window).on("resize", function () {
      fnOnResize();
    });

    var agTimeline = $(".js-timeline"),
      agTimelineLine = $(".js-timeline_line"),
      agTimelineLineProgress = $(".js-timeline_line-progress"),
      agTimelinePoint = $(".js-timeline-card_point-box"),
      agTimelineItem = $(".js-timeline_item"),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top:
          agTimelineItem.first().find(agTimelinePoint).offset().top -
          agTimelineItem.first().offset().top,
        bottom:
          agTimeline.offset().top +
          agTimeline.outerHeight() -
          agTimelineItem.last().find(agTimelinePoint).offset().top,
      });

      f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({ height: n + "px" });

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        if (
          agTop + agPosY - $(window).scrollTop() <
          agPosY + 0.5 * agOuterHeight
        ) {
          if (
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .hasClass("ag-timeline-card_meta")
          ) {
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .parent()
              .next()
              .children()
              .first()
              .css("border", "3px solid var(--primary)");
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .css("color", "var(--primary)");
          } else {
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .css("border", "3px solid var(--primary)");
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .parent()
              .next()
              .css("color", "var(--primary)");
          }
          $(this).addClass("js-ag-active");
        } else {
          if (
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .hasClass("ag-timeline-card_meta")
          ) {
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .css("color", "transparent");
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .parent()
              .next()
              .children()
              .first()
              .css("border", "transparent");
          } else {
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .css("border", "transparent");
            $(this)
              .children()
              .first()
              .children()
              .first()
              .children()
              .first()
              .parent()
              .next()
              .css("color", "transparent");
          }
          $(this).removeClass("js-ag-active");
        }
      });
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }
  });
})(jQuery);
