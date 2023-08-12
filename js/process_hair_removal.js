function getHairRemoval() {
  axios
    .post("../serveur/process_show_hair_removal.php")
    .then((response) => {
      const hairRemovals = response.data;

      // Assuming you have an element with the class name to hold all articles
      const hairContainer = document.querySelector(".containerHair");

      // Clear the content of the articles container before adding new articles
      hairContainer.innerHTML = "";

      hairRemovals.forEach((hairRemoval) => {
        // Create elements to display article information
        const hairElement = document.createElement("div");
        hairElement.className = "hair row";

        const nameHairElement = document.createElement("div");
        nameHairElement.className = "nameHair col-2";
        nameHairElement.innerHTML = hairRemoval.name;

        const dureeHairElement = document.createElement("div");
        dureeHairElement.className = "dureeHair col-2";
        dureeHairElement.innerHTML = hairRemoval.duree;

        const prixHairElement = document.createElement("div");
        prixHairElement.className = "prixHair col-2";
        prixHairElement.innerHTML = hairRemoval.prix;

        // Append the elements to the article element
        hairElement.appendChild(nameHairElement);
        hairElement.appendChild(dureeHairElement);
        hairElement.appendChild(prixHairElement);

        // Append the article element to the articles container
        hairContainer.appendChild(hairElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getHairRemoval();
