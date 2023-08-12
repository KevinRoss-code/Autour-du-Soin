function addArticle(e) {
  e.preventDefault();

  let massage_description = document.getElementById(
    "massage_description"
  ).value;
  let duree_massage = document.getElementById("duree_massage").value;
  let prix = document.getElementById("prix").value;
  let name = document.getElementById("name").value;
  let image = document.getElementById("image").files[0]; // Get the selected image file

  const formData = new FormData();
  formData.append("massage_description", massage_description);
  formData.append("duree_massage", duree_massage);
  formData.append("prix", prix);
  formData.append("name", name);
  if (image) {
    formData.append("image", image);
  }

  axios
    .post("../serveur/add_article.php", formData, {
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

const formulaire = document.getElementById("send");
formulaire.addEventListener("click", addArticle);
