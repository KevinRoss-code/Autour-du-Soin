function getPartenair() {
  axios
    .post("../serveur/process_show_partenair.php")
    .then((response) => {
      const partenaires = response.data;
      const partenairContainer = document.querySelector(".containerPartenair");
      partenairContainer.innerHTML = "";

      partenaires.forEach((partenaire) => {
        if (partenaire.image) {
          const titleElement = document.createElement("div");
          titleElement.className = "image-title"; // Ajoutez une classe CSS pour le style
          titleElement.textContent = partenaire.name;

          const imageLink = document.createElement("a");
          imageLink.href = partenaire.site_web; // Définissez l'URL de redirection ici
          imageLink.target = "_blank"; // Ouvre le lien dans une nouvelle fenêtre/onglet
          imageLink.className = "image-container";

          const imagePElement = document.createElement("img");
          imagePElement.src = partenaire.image;

          imageLink.appendChild(titleElement);
          imageLink.appendChild(imagePElement);
          partenairContainer.appendChild(imageLink);
        } else {
          imageDiv.innerHTML = "No Image Available";
        }
      });

      // Appeler la fonction pour démarrer le diaporama une fois que les images ont été chargées.
      startSlideshow();
    })
    .catch((error) => {
      console.log(error);
    });
}

// Fonction pour gérer le diaporama
function startSlideshow() {
  const images = document.querySelectorAll(
    ".containerPartenair .image-container"
  );
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Afficher la première image
  showImage(currentIndex);

  // Définir l'intervalle de changement d'image (par exemple, toutes les 3 secondes)
  setInterval(nextImage, 5000);
}

getPartenair();
