document.querySelectorAll(".nav-link").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    switch (this.textContent) {
      case "Les massages":
        bodyContent.style.display = "none";
        containerMassage.style.display = "block";
        containerSoins.style.display = "none";
        containerMaquillage.style.display = "none";
        containerOngle.style.display = "none";
        containerEpilation.style.display = "none";
        containerTarif.style.display = "none";
        break;
      case "Les soins du visage":
        bodyContent.style.display = "none";
        containerMassage.style.display = "none";
        containerSoins.style.display = "block";
        containerMaquillage.style.display = "none";
        containerOngle.style.display = "none";
        containerEpilation.style.display = "none";
        containerTarif.style.display = "none";
        break;
      case "Le maquillage":
        bodyContent.style.display = "none";
        containerMassage.style.display = "none";
        containerSoins.style.display = "none";
        containerMaquillage.style.display = "block";
        containerOngle.style.display = "none";
        containerEpilation.style.display = "none";
        containerTarif.style.display = "none";
        break;
      case "Les ongles":
        bodyContent.style.display = "none";
        containerMassage.style.display = "none";
        containerSoins.style.display = "none";
        containerMaquillage.style.display = "none";
        containerOngle.style.display = "block";
        containerEpilation.style.display = "none";
        containerTarif.style.display = "none";
        break;
      case "Les épilations":
        bodyContent.style.display = "none";
        containerMassage.style.display = "none";
        containerSoins.style.display = "none";
        containerMaquillage.style.display = "none";
        containerOngle.style.display = "none";
        containerEpilation.style.display = "block";
        containerTarif.style.display = "none";
        break;
      case "Les tarifs":
        bodyContent.style.display = "none";
        containerMassage.style.display = "none";
        containerSoins.style.display = "none";
        containerMaquillage.style.display = "none";
        containerOngle.style.display = "none";
        containerEpilation.style.display = "none";
        containerTarif.style.display = "block";
        break;
      default:
        bodyContent.style.display = "block";
        containerMassage.style.display = "block";
        containerSoins.style.display = "none";
        containerMaquillage.style.display = "none";
        containerOngle.style.display = "none";
        containerEpilation.style.display = "none";
        containerTarif.style.display = "none";
    }
  });
});
