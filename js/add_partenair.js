function addPartenair(e) {
  e.preventDefault();

  let namePartenair = document.getElementById("namePartenair").value;
  let siteWeb = document.getElementById("siteWeb").value;
  let adresse = document.getElementById("adresse").value;
  let image = document.getElementById("imagePartenair").files[0]; // Get the selected image file

  const formData = new FormData();
  formData.append("namePartenair", namePartenair);
  formData.append("siteWeb", siteWeb);
  formData.append("adresse", adresse);
  if (image) {
    formData.append("imagePartenair", image);
  }

  axios
    .post("../serveur/add_partenair.php", formData, {
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

const formulaireP = document.getElementById("sendFormPartenair");
formulaireP.addEventListener("click", addPartenair);
