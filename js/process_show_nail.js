function getNail() {
  axios
    .post("../serveur/process_show_nail.php")
    .then((response) => {
      const nails = response.data;

      // Assuming you have an element with the class name to hold all articles
      const nailContainer = document.querySelector(".containerNail");

      // Clear the content of the articles container before adding new articles
      nailContainer.innerHTML = "";

      nails.forEach((nail) => {
        // Create elements to display article information
        const nailElement = document.createElement("div");
        nailElement.className = "makeup row";

        const nameNailElement = document.createElement("div");
        nameNailElement.className = "nameNail col-2";
        nameNailElement.innerHTML = nail.name;

        const dureeNailElement = document.createElement("div");
        dureeNailElement.className = "dureeNail col-2";
        dureeNailElement.innerHTML = nail.duree;

        const prixNailElement = document.createElement("div");
        prixNailElement.className = "prixMakeup col-2";
        prixNailElement.innerHTML = nail.prix;

        // Append the elements to the article element
        nailElement.appendChild(nameNailElement);
        nailElement.appendChild(dureeNailElement);
        nailElement.appendChild(prixNailElement);

        // Append the article element to the articles container
        nailContainer.appendChild(nailElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getNail();
