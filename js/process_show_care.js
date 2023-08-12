function getCares() {
  axios
    .post("../serveur/process_show_care.php")
    .then((response) => {
      const cares = response.data;

      // Assuming you have an element with the class name to hold all articles
      const caresContainer = document.querySelector(".containerCare");

      // Clear the content of the articles container before adding new articles
      caresContainer.innerHTML = "";

      cares.forEach((care) => {
        // Create elements to display article information
        const careElement = document.createElement("div");
        careElement.className = "care row";

        const nameCareElement = document.createElement("div");
        nameCareElement.className = "nameCare col-2";
        nameCareElement.innerHTML = care.name;

        const dureeCareElement = document.createElement("div");
        dureeCareElement.className = "dureeCare col-2";
        dureeCareElement.innerHTML = care.dure;

        const prixCareElement = document.createElement("div");
        prixCareElement.className = "prixCare col-2";
        prixCareElement.innerHTML = care.prix;

        // Append the elements to the article element
        careElement.appendChild(nameCareElement);
        careElement.appendChild(dureeCareElement);
        careElement.appendChild(prixCareElement);

        // Append the article element to the articles container
        caresContainer.appendChild(careElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getCares();
