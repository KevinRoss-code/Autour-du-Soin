function getNail() {
  axios
    .post("../serveur/process_show_nail.php")
    .then((response) => {
      const nails = response.data;

      // Assuming you have an element with the class name to hold all articles
      // const nailContainer = document.querySelector(".containerNail");
      const containerOngle = document.getElementById("containerOngle");

      if (containerOngle) {
        nails.forEach((nail) => {
          // Create elements to display article information
          const nailElement = document.createElement("div");
          nailElement.className = "nail row";

          const nameNailElement = document.createElement("div");
          nameNailElement.className = "nameNail";
          nameNailElement.innerHTML = nail.name;

          const dureeNailElement = document.createElement("div");
          dureeNailElement.className = "dureeNail";
          dureeNailElement.innerHTML = nail.duree;

          const prixNailElement = document.createElement("div");
          prixNailElement.className = "prixNail";
          prixNailElement.innerHTML = nail.prix;

          // Append the elements to the article element
          nailElement.appendChild(nameNailElement);
          nailElement.appendChild(dureeNailElement);
          nailElement.appendChild(prixNailElement);

          // Append the article element to the articles container
          containerOngle.appendChild(nailElement);
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
getNail();
