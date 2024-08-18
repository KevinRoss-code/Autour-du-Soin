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

function createModalUpdate(type, title, content, callback) {
  var myModal = "";

  if (callback != undefined) {
    /* en fonciton du type de modal */
    if (type == "success" || type == "warning" || type == "danger") {
      myModal =
        '<div class="modal fade" id="myModalConfirm" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '  <div class="modal-dialog">' +
        '    <div class="modal-content">' +
        '      <div class="modal-header modal-header-' +
        type +
        '">' +
        '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
        '        <h4><i class="glyphicon glyphicon-alert"></i> ' +
        title +
        "</h4>" +
        "      </div>" +
        '      <div class="modal-body">' +
        '        <div class="form-group login-form-control">' +
        '          <div class="input-group">' +
        '            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>' +
        '            <input id="newName" class="form-control" name="newName">' +
        "          </div>" +
        "        </div>" +
        '        <div class="form-group login-form-control">' +
        '          <div class="input-group">' +
        '            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>' +
        '            <input type="email" id="newMail" class="form-control" name="newMail" required="required">' +
        "          </div>" +
        "        </div>" +
        '        <div class="form-group login-form-control">' +
        '          <div class="input-group">' +
        '            <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>' +
        '            <input id="newPhone" class="form-control" name="newPhone">' +
        "          </div>" +
        "        </div>" +
        '        <div class="form-group login-form-control">' +
        '          <div class="input-group">' +
        '            <span class="input-group-addon"><i class="glyphicon glyphicon-phone-alt"></i></span>' +
        '            <input id="newPhoneFix" class="form-control" name="newPhoneFix">' +
        "          </div>" +
        "        </div>" +
        '           <div class="form-group login-form-control" id="baliseErrorModalVueTech" style="display: none">' +
        '               <div class="input-group">' +
        '                   <span class="input-group-addon"><i class="glyphicon glyphicon-remove-sign"></i></span>' +
        '                   <input class="errorModal form-control" id="errorUpdateSupport"/>' +
        "               </div>" +
        "           </div>" +
        "      </div>" +
        '      <div class="modal-footer">' +
        '           <div class="text-center">' +
        '               <button type="button" id="but-myModal-confirm-tech-support" class="btn btn-labeled btn-success">' +
        '               <span class="btn-label"><i class="glyphicon glyphicon-ok"></i></span>Confirmer</button>' +
        '               <button type="button" id="but-myModal-dismiss" class="btn btn-labeled btn-warning" data-dismiss="modal" autofocus>' +
        '               <span class="btn-label"><i class="glyphicon glyphicon-remove"></i></span>Annuler</button>' +
        "       </div>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>";

      /* Instanciate and fire the modal */
      $(myModal).modal();
      $("#myModalConfirm").modal("show");
      /* Get focus on the ok button and escape shortcut to quit, plus cleans itself on quit event */
      $(document).on("shown.bs.modal", function (currentEvent) {
        /* Afficher anciennes données*/
        // let oldValueName = document.getElementById("newName");
        // let oldValueMail = document.getElementById("newMail");
        // let oldValuePhone = document.getElementById("newPhone");
        // let oldValuePhoneFix = document.getElementById("newPhoneFix");
        // let inputError = document.getElementById("errorUpdateSupport");
        // let divError = document.getElementById("baliseErrorModalVueTech");
        // let idTech = "";

        // if (content == "1er_ligne") {
        //   idTech = $("#currentId").val();
        //   oldValueName.setAttribute("value", $("#currentName").val());
        //   oldValueMail.setAttribute("value", $("#currentMail").val());
        //   oldValuePhone.setAttribute(
        //     "value",
        //     $("#currentPhoneMobile")
        //       .val()
        //       .replace(new RegExp("[^(0-9)]", "g"), "")
        //   );
        //   oldValuePhoneFix.setAttribute(
        //     "value",
        //     $("#currentPhoneFix").val().replace(new RegExp("[^(0-9)]", "g"), "")
        //   );
        // } else {
        //   idTech = $("#currentId2").val();
        //   oldValueName.setAttribute("value", $("#currentName2").val());
        //   oldValueMail.setAttribute("value", $("#currentMail2").val());
        //   oldValuePhone.setAttribute(
        //     "value",
        //     $("#currentPhoneMobile2")
        //       .val()
        //       .replace(new RegExp("[^(0-9)]", "g"), "")
        //   );
        //   oldValuePhoneFix.setAttribute(
        //     "value",
        //     $("#currentPhoneFix2")
        //       .val()
        //       .replace(new RegExp("[^(0-9)]", "g"), "")
        //   );
        // }
        // /* gestion du click sur le bouton confirm */
        // $("#but-myModal-confirm-tech-support").on("click", function () {
        //   newName = $("#newName").val();
        //   newMail = $("#newMail").val();
        //   newPhone = $("#newPhone").val();
        //   newPhoneFix = $("#newPhoneFix").val();
        //   updateTech(
        //     idTech,
        //     newName,
        //     newMail,
        //     newPhone,
        //     newPhoneFix,
        //     oldValueMail.value
        //   )
        //     .then((data) => {
        //       if (errorData == "") {
        //         listTechs = {
        //           newName: newName,
        //           newMail: newMail,
        //           newPhone: newPhone,
        //           newPhoneFix: newPhoneFix,
        //         };
        //         $("#myModalConfirm").remove();
        //         $("body").removeClass("modal-open");
        //         $(".modal-backdrop").remove();
        //         $(document).off("shown.bs.modal");
        //       } else {
        //         currentEvent.preventDefault();
        //         if (newName == "" || errorData.includes("nom")) {
        //           $("#newName").css("border-color", "red");
        //           inputError.value = errorData;
        //           inputError.style.color = "red";
        //           divError.style.display = "block";
        //         } else {
        //           $("#newName").css("border-color", "");
        //         }
        //         if (newMail == "" || errorData.includes("mail")) {
        //           $("#newMail").css("border-color", "red");
        //           inputError.value = errorData;
        //           inputError.style.color = "red";
        //           divError.style.display = "block";
        //         } else {
        //           $("#newMail").css("border-color", "");
        //         }
        //         if (errorData.includes("mobile")) {
        //           $("#newPhone").css("border-color", "red");
        //           inputError.value = errorData;
        //           inputError.style.color = "red";
        //           divError.style.display = "block";
        //         } else {
        //           $("#newPhone").css("border-color", "");
        //         }
        //         if (errorData.includes("fixe")) {
        //           $("#newPhoneFix").css("border-color", "red");
        //           inputError.value = errorData;
        //           inputError.style.color = "red";
        //           divError.style.display = "block";
        //         } else {
        //           $("#newPhoneFix").css("border-color", "");
        //         }
        //       }
        //     })
        //     .catch((error) => {
        //       console.error(error); // Gérer l'erreur ici
        //     });
        // });
        $("#myModalConfirm").on("hidden.bs.modal", function () {
          $("#myModalConfirm").remove();
          $(document).off("shown.bs.modal");
        });
      });
    } else {
      /* Unkown modal type, failed */
      return;
    }
  }
}
