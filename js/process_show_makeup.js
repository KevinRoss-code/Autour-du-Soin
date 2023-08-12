function getMakeup() {
  axios
    .post("../serveur/process_show_makeup.php")
    .then((response) => {
      const makeups = response.data;

      // Assuming you have an element with the class name to hold all articles
      const makeupContainer = document.querySelector(".containerMakeup");

      // Clear the content of the articles container before adding new articles
      makeupContainer.innerHTML = "";

      makeups.forEach((makeup) => {
        // Create elements to display article information
        const makeupElement = document.createElement("div");
        makeupElement.className = "makeup row";

        const nameMakeupElement = document.createElement("div");
        nameMakeupElement.className = "nameMakeup col-2";
        nameMakeupElement.innerHTML = makeup.name;

        const dureeMakeupElement = document.createElement("div");
        dureeMakeupElement.className = "dureeMakeup col-2";
        dureeMakeupElement.innerHTML = makeup.duree;

        const prixMakeupElement = document.createElement("div");
        prixMakeupElement.className = "prixMakeup col-2";
        prixMakeupElement.innerHTML = makeup.prix;

        // Append the elements to the article element
        makeupElement.appendChild(nameMakeupElement);
        makeupElement.appendChild(dureeMakeupElement);
        makeupElement.appendChild(prixMakeupElement);

        // Append the article element to the articles container
        makeupContainer.appendChild(makeupElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getMakeup();
