function getArticles() {
  axios
    .get("../serveur/process_show_article.php")
    .then((response) => {
      const articles = response.data;

      // Sélectionnez l'élément containerMassage dans le DOM
      // const containerMassage = document.getElementById("containerMassage");
      const containerMassage = document.getElementById("containerMassage");
      //console.log(containerMassage);

      // Vérifiez si l'élément containerMassage existe dans le DOM
      if (containerMassage) {
        // Parcourez les articles et créez les éléments correspondants
        articles.forEach((article, index) => {
          // Créez un élément pour afficher les informations de l'article
          const articleElement = document.createElement("div");
          articleElement.className = "article row";

          // Créez des éléments pour chaque information de l'article
          const nameElement = document.createElement("div");
          nameElement.className = "name";
          nameElement.innerHTML = article.name;

          const descElement = document.createElement("div");
          descElement.className = "description";
          descElement.innerHTML = article.massage_description;

          const dureeElement = document.createElement("div");
          dureeElement.className = "duree";
          dureeElement.innerHTML = article.duree_massage + " min";

          const prixElement = document.createElement("div");
          prixElement.className = "prix";
          prixElement.innerHTML = article.prix + " €";

          const imageDiv = document.createElement("div");
          imageDiv.className = "image";

          // Vérifiez s'il y a un chemin d'image pour l'article
          if (article.image_path) {
            const imageElement = document.createElement("img");
            imageElement.src = article.image_path;
            imageDiv.appendChild(imageElement);
          } else {
            // Si aucune image n'est disponible, vous pouvez afficher un texte de remplacement ou gérer cela comme nécessaire
            imageDiv.innerHTML = "No Image Available";
          }

          // Créez un nouvel élément img
          let img = new Image(); // Ou document.createElement('img');

          // Définissez la source de l'image
          img.src = "../images/floriture_background_white.png";

          // Définissez d'autres attributs si nécessaire
          img.alt = "séparateur des articles";
          img.className = "ma-classe-image";
          img.style.width = "300px";
          img.style.height = "200px";
          img.style.display = "block";
          img.style.marginLeft = "auto";
          img.style.marginRight = "auto";
          img.style.marginTop = "auto";
          img.style.marginBottom = "auto";

          // Ajoutez les éléments à l'élément de l'article
          articleElement.appendChild(nameElement);
          articleElement.appendChild(descElement);
          articleElement.appendChild(dureeElement);
          articleElement.appendChild(prixElement);
          articleElement.appendChild(imageDiv);
          articleElement.appendChild(img);

          // Ajoutez l'élément de l'article à l'élément containerMassage
          containerMassage.appendChild(articleElement);
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
getArticles();
