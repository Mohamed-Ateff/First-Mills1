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
      const $submenu = $(this).next(".sub-menu");
      if ($submenu.length) {
        e.preventDefault(); // Prevent default action only if there is a submenu
        $submenu.slideToggle();
      }
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

// Prevent default action for menu links only if they have a submenu
$menuLinks.each(function () {
  const $submenu = $(this).next(".sub-menu");
  if (!$submenu.length) {
    $(this)
      .off("click")
      .on("click", function (e) {
        window.location.href = $(this).attr("href"); // Ensure navigation happens
      });
  }
});

// Header Ends

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

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("languageToggle");
  const body = document.body;
  const contentElements = document.querySelectorAll("[data-en]");

  // Store original Arabic inner HTML
  const originalContent = {};
  contentElements.forEach((element) => {
    originalContent[element] = element.innerHTML;
  });

  languageToggle.addEventListener("click", function () {
    if (body.classList.contains("english")) {
      body.classList.remove("english");
      languageToggle.textContent = "English";
      body.setAttribute("lang", "ar");
      body.setAttribute("dir", "rtl");
      updateContent("ar");
    } else {
      body.classList.add("english");
      languageToggle.textContent = "عربي";
      body.setAttribute("lang", "en");
      body.setAttribute("dir", "ltr");
      updateContent("en");
    }
  });

  function updateContent(language) {
    contentElements.forEach((element) => {
      if (language === "en") {
        element.innerHTML = element.getAttribute("data-en");
        element.classList.add("english");
      } else {
        element.innerHTML = originalContent[element];
        element.classList.remove("english");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector(".ratio_evolution_ar_svg");
  const line = document.getElementById("ratio_evolution_ar_line");

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
  const svg = document.querySelector(".ratio_evolution_en_svg");
  const line = document.getElementById("ratio_evolution_en_line");

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
