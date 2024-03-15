function recuperation() {
  axios
    .get("../serveur/process_show_article.php")
    .then((response) => {
      const Prices = response.data;

      // Assuming you have an element with the class name to hold all articles
      // const nailContainer = document.querySelector(".containerNail");
      const containerTarif = document.getElementById("containerTarif");

      if (containerTarif) {
        Prices.forEach((price) => {
          // Create elements to display article information
          const priceElement = document.createElement("div");
          priceElement.className = "nail row";

          const namePriceElement = document.createElement("div");
          namePriceElement.className = "namePrice";
          namePriceElement.innerHTML = price.name;

          const dureePriceElement = document.createElement("div");
          dureePriceElement.className = "dureePrice";
          dureePriceElement.innerHTML = price.duree;

          const prixPriceElement = document.createElement("div");
          prixPriceElement.className = "prixPrice";
          prixPriceElement.innerHTML = price.prix;

          // Append the elements to the article element
          priceElement.appendChild(namePriceElement);
          priceElement.appendChild(dureePriceElement);
          priceElement.appendChild(prixPriceElement);

          // Append the article element to the articles container
          containerTarif.appendChild(priceElement);
        });
      } else {
        console.error("Element #containerMassage not found in the DOM.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

recuperation();
