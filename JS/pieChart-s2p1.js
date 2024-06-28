"use strict";

$(document).ready(function () {
  var $charts = $(".chart");

  // Function to check if an element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to initialize EasyPieChart when a chart comes into view
  function initializeChart($chart) {
    $chart.easyPieChart({
      easing: "easeOutElastic",
      barColor: $chart.data("bar-color") || "#163029",
      trackColor: "#163029",
      scaleColor: false,
      lineWidth: 50,
      trackWidth: 50,
      size: 180,
      lineCap: "butt",
      animate: {
        duration: 1500, // 2 seconds
        enabled: true,
      },
    });
  }

  // Handler for the scroll event
  function handleScroll() {
    $charts.each(function () {
      var $chart = $(this);
      if (isElementInViewport($chart[0]) && !$chart.hasClass("animated")) {
        initializeChart($chart);
        $chart.addClass("animated"); // Add a class to mark it as animated to prevent re-triggering
      }
    });
  }

  // Initial check on page load
  handleScroll();

  // Attach scroll event listener
  $(window).on("scroll", handleScroll);
});
