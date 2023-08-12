function addFacialCare(e) {
  e.preventDefault();

  let duree_massage = document.getElementById("dureeCare").value;
  let prix = document.getElementById("prixCare").value;
  let name = document.getElementById("nameCare").value;

  const formData = new FormData();
  formData.append("dureeCare", duree_massage);
  formData.append("prixCare", prix);
  formData.append("nameCare", name);

  axios
    .post("../serveur/add_facial_care.php", formData, {
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

const formulaireCare = document.getElementById("sendCare");
formulaireCare.addEventListener("click", addFacialCare);
