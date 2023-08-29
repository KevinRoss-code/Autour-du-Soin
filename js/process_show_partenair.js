function getPartenair() {
  axios
    .post("../serveur/process_show_partenair.php")
    .then((response) => {
      const partenaires = response.data;

      // Assuming you have an element with the class name to hold all articles
      const partenairContainer = document.querySelector(".containerPartenair");

      // Clear the content of the articles container before adding new articles
      partenairContainer.innerHTML = "";

      partenaires.forEach((partenaire) => {
        // Create elements to display article information
        const partenaireElement = document.createElement("div");
        partenaireElement.className = "partenaire row";

        const namePElement = document.createElement("div");
        namePElement.className = "nameP col-2";
        namePElement.innerHTML = partenaire.name;

        const siteWebElement = document.createElement("div");
        siteWebElement.className = "siteWeb col-3";
        siteWebElement.innerHTML = partenaire.site_web;

        const adresseElement = document.createElement("div");
        adresseElement.className = "adresse col-2";
        adresseElement.innerHTML = partenaire.adresse;

        const imageDiv = document.createElement("div");
        imageDiv.className = "imageP col-3";

        if (partenaire.image) {
          const imagePElement = document.createElement("img");
          imagePElement.src = partenaire.image;
          imageDiv.appendChild(imagePElement);
        } else {
          // If there's no image, you can display a placeholder or handle it as needed
          imageDiv.innerHTML = "No Image Available";
        }

        // Append the elements to the article element
        partenaireElement.appendChild(namePElement);
        partenaireElement.appendChild(siteWebElement);
        partenaireElement.appendChild(adresseElement);
        partenaireElement.appendChild(imageDiv);

        // Append the article element to the articles container
        partenairContainer.appendChild(partenaireElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getPartenair();
