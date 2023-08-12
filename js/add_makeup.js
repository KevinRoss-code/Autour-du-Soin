function addMakeUp(e) {
  e.preventDefault();

  let dureeMakeup = document.getElementById("dureeMakeup").value;
  let prixMakeup = document.getElementById("prixMakeup").value;
  let nameMakeup = document.getElementById("nameMakeup").value;

  const formData = new FormData();
  formData.append("dureeMakeup", dureeMakeup);
  formData.append("prixMakeup", prixMakeup);
  formData.append("nameMakeup", nameMakeup);

  axios
    .post("../serveur/add_makeup.php", formData, {
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

const formulaireMakeup = document.getElementById("sendMakeup");
formulaireMakeup.addEventListener("click", addMakeUp);
