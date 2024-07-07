// script.js

document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("languageToggle");
  const body = document.body;
  const contentElements = document.querySelectorAll("[data-en]");

  // Store original Arabic inner HTML including attributes
  const originalContent = new Map();
  contentElements.forEach((element) => {
    originalContent.set(element, {
      html: element.innerHTML,
      aos: {
        fade: element.getAttribute("data-aos"),
        duration: element.getAttribute("data-aos-duration"),
      },
    });
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
      languageToggle.textContent = "Arabic";
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
        const original = originalContent.get(element);
        element.innerHTML = original.html;
        element.setAttribute("data-aos", original.aos.fade);
        element.setAttribute("data-aos-duration", original.aos.duration);
        element.classList.remove("english");
      }
    });
    // Reinitialize AOS
    AOS.refresh();
  }
});
