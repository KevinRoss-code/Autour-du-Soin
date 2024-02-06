// Sélectionnez l'élément contenant votre texte
// const scrollText = document.querySelectorAll(".scroll-text");

// Fonction pour gérer l'effet de fondu en fonction de la position de défilement
// function handleScroll() {
// Obtenez la position de défilement actuelle de la page
//   const scrollPosition = window.scrollY;

// Obtenez la position verticale de l'élément par rapport au haut de la page
//   const elementPosition = scrollText.offsetTop;

// Définissez l'opacité en fonction de la position de l'élément par rapport à la position de défilement
//   if (scrollPosition > elementPosition - window.innerHeight / 2) {
//     scrollText.style.opacity = 1;
//   } else {
//     scrollText.style.opacity = 0;
//   }
// }

// Écoutez l'événement de défilement de la page et appelez la fonction de gestion de l'effet de fondu
// window.addEventListener("scroll", handleScroll);

// Appelez la fonction une fois au chargement de la page pour gérer l'effet initial
// handleScroll();
// Récupération de tous les articles
// Récupération du conteneur de défilement
$(window).scroll(function () {
  $("article").each(function () {
    var articleTop = $(this).offset().top;
    var articleBottom = articleTop + $(this).outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    if (articleBottom > windowTop && articleTop < windowBottom) {
      $(this).addClass("visible");
    } else {
      $(this).removeClass("visible");
    }
  });
});
