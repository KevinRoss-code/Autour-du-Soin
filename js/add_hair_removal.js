function addHairRemoval(e) {
  e.preventDefault();

  let dureeHair = document.getElementById("dureeHair").value;
  let prixHair = document.getElementById("prixHair").value;
  let nameHair = document.getElementById("nameHair").value;

  const formData = new FormData();
  formData.append("dureeHair", dureeHair);
  formData.append("prixHair", prixHair);
  formData.append("nameHair", nameHair);

  axios
    .post("../serveur/add_hair_removal.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the correct content type for file upload
      },
    })
    .then((response) => {
      const responseData = response.data;
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

const formulaireHair = document.getElementById("sendHair");
formulaireHair.addEventListener("click", addHairRemoval);
