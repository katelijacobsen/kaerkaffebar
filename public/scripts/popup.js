function openPopUp(id) {
  document.getElementById(id)?.classList.remove("hidden");
  //document.body.classList.add("overflow-hidden");
}

function closingPopUp(id) {
  document.getElementById(id)?.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

//  window.openPopUp = openPopUp;
//  window.closingPopUp = closingPopUp;

// Event listener for at lukke pop-up ved at klikke på vores Button komponent
document.addEventListener("DOMContentLoaded", () => {
  // vælger alle knapper med vores attribute. Vi bruger btn som parameter i vores callback
  // og tilføjer en event listener til hver knap
  document.querySelectorAll("[data-open-popup]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const popupId = btn.getAttribute("data-open-popup");
      openPopUp(popupId);
    });
  });
});

// Event listener for at lukke pop-up ved at klikke på vores Button komponent
document.addEventListener("DOMContentLoaded", () => {
  // vælger alle knapper med vores attribute. Vi bruger btn som parameter i vores callback
  // og tilføjer en event listener til hver knap
  document.querySelectorAll("[data-close-popup]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const popupId = btn.getAttribute("data-close-popup");
      closingPopUp(popupId);
    });
  });
});
