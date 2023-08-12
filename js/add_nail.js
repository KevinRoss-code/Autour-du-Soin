function addNail(e) {
  e.preventDefault();

  let dureeNail = document.getElementById("dureeNail").value;
  let prixNail = document.getElementById("prixNail").value;
  let nameNail = document.getElementById("nameNail").value;

  const formData = new FormData();
  formData.append("dureeNail", dureeNail);
  formData.append("prixNail", prixNail);
  formData.append("nameNail", nameNail);

  axios
    .post("../serveur/add_nail.php", formData, {
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

const formulaireNail = document.getElementById("sendNail");
formulaireNail.addEventListener("click", addNail);
