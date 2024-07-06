$(document).ready(function () {
  // Handle navbar toggler click
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
  });

  // Initial setup
  handleResize();

  // Debounced resize handler
  let resizeTimeout;
  $(window).resize(function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
  });
});

// Cache selectors
const $subMenus = $(".sub-menu");
const $menuLinks = $(".menu-link");

// Handle resize
function handleResize() {
  if ($(window).innerWidth() <= 992) {
    // Bind click event to menu links for small screens
    $menuLinks.off("click").on("click", function (e) {
      e.preventDefault(); // Prevent default action
      $(this).next().slideToggle();
    });
  } else {
    // Unbind click event for larger screens
    $menuLinks.off("click");
    // Reset sub-menus display
    $subMenus.each(function () {
      $(this).css("display", "");
    });
  }
}

try {
  fetch(
    new Request(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      { method: "HEAD", mode: "no-cors" }
    )
  )
    .then(function (response) {
      return true;
    })
    .catch(function (e) {
      var carbonScript = document.createElement("script");
      carbonScript.src =
        "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
} catch (error) {
  console.log(error);
}

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36251023-1"]);
_gaq.push(["_setDomainName", "jqueryscript.net"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector(".ratio_evolution_svg");
  const line = document.getElementById("ratio_evolution_line");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - 100 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onVisibilityChange() {
    if (isElementInViewport(svg)) {
      line.classList.add("animated-path");
      window.removeEventListener("scroll", onVisibilityChange);
    }
  }

  window.addEventListener("scroll", onVisibilityChange);
  onVisibilityChange();
});

document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector(".stock_performance_svg");
  const lines = document.getElementsByClassName("stock_performance_line");
  console.log(svg);
  console.log(lines);

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - 200 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onVisibilityChange() {
    if (isElementInViewport(svg)) {
      Array.from(lines).forEach((line) => {
        line.classList.add("animated-path");
      });
      window.removeEventListener("scroll", onVisibilityChange);
    }
  }

  window.addEventListener("scroll", onVisibilityChange);
  onVisibilityChange();
});

document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector(".company_weight_svg");
  const line = document.getElementById("company_weight_line");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - 100 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onVisibilityChange() {
    if (isElementInViewport(svg)) {
      line.classList.add("animated-path2");
      window.removeEventListener("scroll", onVisibilityChange);
    }
  }

  window.addEventListener("scroll", onVisibilityChange);
  onVisibilityChange();
});
