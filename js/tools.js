//function creatModalUpdateMassage(type, title, content, callback) {}
function showFormAdd() {
  document.getElementById("selectForm").addEventListener("change", function () {
    let selectedOption = this.value;

    // Masquer tous les formulaires
    let forms = document.getElementsByClassName("formulaire");
    //console.log(forms);
    for (let i = 0; i < forms.length; i++) {
      forms[i].classList.add("hidden");
    }

    // Afficher le formulaire sélectionné
    document
      .getElementById(
        "form" +
          selectedOption.charAt(0).toUpperCase() +
          selectedOption.slice(1)
      )
      .classList.remove("hidden");
  });
}

function showDatatable() {
  document
    .getElementById("selectDatable")
    .addEventListener("change", function () {
      let selectedOption = this.value;

      // Masquer tous les formulaires
      let forms = document.getElementsByClassName("table");
      //console.log(forms);
      for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("hidden");
      }

      // Afficher le formulaire sélectionné
      document
        .getElementById(
          "tableUpdate" +
            selectedOption.charAt(0).toUpperCase() +
            selectedOption.slice(1)
        )
        .classList.remove("hidden");
    });
}
showFormAdd();
showDatatable();
