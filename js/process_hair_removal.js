function getHairRemoval() {
  axios
    .post("../serveur/process_show_hair_removal.php")
    .then((response) => {
      const hairRemovals = response.data;

      const containerEpilation = document.getElementById("containerEpilation");

      if (containerEpilation) {
        hairRemovals.forEach((epilation) => {
          // Create elements to display article information
          const epilationElement = document.createElement("div");
          epilationElement.className = "epilation row";

          const nameEpilationElement = document.createElement("div");
          nameEpilationElement.className = "nameEpilation";
          nameEpilationElement.innerHTML = epilation.name;

          const dureeEpilationElement = document.createElement("div");
          dureeEpilationElement.className = "dureeEpilation";
          dureeEpilationElement.innerHTML = epilation.duree;

          const prixEpilationElement = document.createElement("div");
          prixEpilationElement.className = "prixEpilation";
          prixEpilationElement.innerHTML = epilation.prix;

          // Append the elements to the article element
          epilationElement.appendChild(nameEpilationElement);
          epilationElement.appendChild(dureeEpilationElement);
          epilationElement.appendChild(prixEpilationElement);

          // Append the article element to the articles container
          containerEpilation.appendChild(epilationElement);
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
getHairRemoval();
