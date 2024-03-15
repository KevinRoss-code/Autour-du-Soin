function getCares() {
  axios
    .post("../serveur/process_show_care.php")
    .then((response) => {
      const cares = response.data;

      // Assuming you have an element with the class name to hold all articles
      //  const caresContainer = document.querySelector(".containerCare");
      const containerSoins = document.getElementById("containerSoins");

      if (containerSoins) {
        cares.forEach((care) => {
          // Create elements to display article information
          const careElement = document.createElement("div");
          careElement.className = "care row";

          const nameCareElement = document.createElement("div");
          nameCareElement.className = "nameCare";
          nameCareElement.innerHTML = care.name;

          const dureeCareElement = document.createElement("div");
          dureeCareElement.className = "dureeCare";
          dureeCareElement.innerHTML = care.dure;

          const prixCareElement = document.createElement("div");
          prixCareElement.className = "prixCare";
          prixCareElement.innerHTML = care.prix;

          // Append the elements to the article element
          careElement.appendChild(nameCareElement);
          careElement.appendChild(dureeCareElement);
          careElement.appendChild(prixCareElement);

          // Append the article element to the articles container
          containerSoins.appendChild(careElement);
        });
      } else {
        console.error("Element #containerMassage not found in the DOM.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getCares();
