function getArticles() {
  axios
    .post("../serveur/process_show_article.php")
    .then((response) => {
      const articles = response.data;

      // Assuming you have an element with the class name to hold all articles
      const articlesContainer = document.querySelector(".container");

      // Clear the content of the articles container before adding new articles
      articlesContainer.innerHTML = "";

      articles.forEach((article) => {
        // Create elements to display article information
        const articleElement = document.createElement("div");
        articleElement.className = "article row";

        const nameElement = document.createElement("div");
        nameElement.className = "name col-2";
        nameElement.innerHTML = article.name;

        const descElement = document.createElement("div");
        descElement.className = "description col-3";
        descElement.innerHTML = article.massage_description;

        const dureeElement = document.createElement("div");
        dureeElement.className = "duree col-2";
        dureeElement.innerHTML = article.duree_massage;

        const prixElement = document.createElement("div");
        prixElement.className = "prix col-2";
        prixElement.innerHTML = article.prix;

        const imageDiv = document.createElement("div");
        imageDiv.className = "image col-3";

        if (article.image_path) {
          const imageElement = document.createElement("img");
          imageElement.src = article.image_path;
          imageDiv.appendChild(imageElement);
        } else {
          // If there's no image, you can display a placeholder or handle it as needed
          imageDiv.innerHTML = "No Image Available";
        }

        // Append the elements to the article element
        articleElement.appendChild(nameElement);
        articleElement.appendChild(descElement);
        articleElement.appendChild(dureeElement);
        articleElement.appendChild(prixElement);
        articleElement.appendChild(imageDiv);

        // Append the article element to the articles container
        articlesContainer.appendChild(articleElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to get the articles when needed, for example, when the page loads
getArticles();
