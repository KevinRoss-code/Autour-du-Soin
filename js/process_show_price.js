function recuperation() {
  axios
    .get("../serveur/process_show_article.php")
    .then((response) => {
      const articlesPrice = response.data;

      // Assuming you have an element with the class name to hold all articles
      const articlesPricesContainer =
        document.querySelector(".container_massage");

      // Clear the content of the articles container before adding new articles
      articlesPricesContainer.innerHTML = "";

      articlesPrice.forEach((price) => {
        const articlePrice = document.createElement("div");
        articlePrice.className = "article row";

        const articlePriceName = document.createElement("div");
        articlePriceName.className = "name";
        articlePriceName.innerHTML = price.name;

        const articlePriceDuree = document.createElement("div");
        articlePriceDuree.className = "duree";
        articlePriceDuree.innerHTML = price.duree_massage + " min";

        const articlePricePrice = document.createElement("div");
        articlePricePrice.className = "prix";
        articlePricePrice.innerHTML = price.prix + " €";

        // Append the elements to the article element
        articlePrice.appendChild(articlePriceName);
        articlePrice.appendChild(articlePriceDuree);
        articlePrice.appendChild(articlePricePrice);
        articlesPricesContainer.appendChild(articlePrice);

        // Append the article element to the articles container
        //affichage = articlesPricesContainer.appendChild(articlePrice);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  axios.get("../serveur/process_show_care.php").then((response) => {
    const caresPrice = response.data;

    // Assuming you have an element with the class name to hold all articles
    const carePriceContainer = document.querySelector(".container_care");

    // Clear the content of the articles container before adding new articles
    carePriceContainer.innerHTML = "";

    caresPrice.forEach((priceCare) => {
      const carePrice = document.createElement("div");
      carePrice.className = "care row";

      const carePriceName = document.createElement("div");
      carePriceName.className = "name_care";
      carePriceName.innerHTML = priceCare.name;

      const carePriceDuree = document.createElement("div");
      carePriceDuree.className = "duree_care";
      carePriceDuree.innerHTML = priceCare.dure + " min";

      const carePricePrice = document.createElement("div");
      carePricePrice.className = "prix";
      carePricePrice.innerHTML = priceCare.prix + " €";

      // Append the elements to the article element
      carePrice.appendChild(carePriceName);
      carePrice.appendChild(carePriceDuree);
      carePrice.appendChild(carePricePrice);
      carePriceContainer.appendChild(carePrice);

      // Append the article element to the articles container
      //affichage = carePriceContainer.appendChild(articlePrice);
    });
  });
}

recuperation();
