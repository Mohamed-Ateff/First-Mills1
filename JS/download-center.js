document.addEventListener("DOMContentLoaded", () => {
  const sectionHeaders = document.querySelectorAll(".section-header");
  const subCheckboxes = document.querySelectorAll(".sub-checkbox");
  const downloadAllButton = document.getElementById("download-all");
  const downloadSelectedButton = document.getElementById("download-selected");

  sectionHeaders.forEach((header) => {
    header.addEventListener("change", () => {
      const section = header.closest(".section");
      const checkboxes = section.querySelectorAll(".sub-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = header.checked;
      });
    });
  });

  subCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const section = checkbox.closest(".section");
      const header = section.querySelector(".section-header");
      const allChecked = Array.from(
        section.querySelectorAll(".sub-checkbox")
      ).every((cb) => cb.checked);
      header.checked = allChecked;
    });
  });

  downloadAllButton.addEventListener("click", () => {
    const allFiles = Array.from(document.querySelectorAll(".sub-checkbox")).map(
      (cb) => cb.dataset.file
    );
    downloadFiles(allFiles);
  });

  downloadSelectedButton.addEventListener("click", () => {
    const selectedFiles = Array.from(
      document.querySelectorAll(".sub-checkbox:checked")
    ).map((cb) => cb.dataset.file);
    downloadFiles(selectedFiles);
  });

  function downloadFiles(files) {
    if (files.length === 0) {
      alert("لم يتم تحديد ملفات للتنزيل.");
      return;
    }

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", "");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
