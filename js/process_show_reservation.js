function showResa() {
  axios
    .get("../serveur/process_show_reservation.php")
    .then((response) => {
      const reservations = response.data;

      // Convertissez les données de réservation au format attendu par fullCalendar
      const events = reservations.map((reservation) => {
        return {
          title: reservation.title, // Assurez-vous que le nom du champ correspond
          start: reservation.start, // Assurez-vous que le nom du champ correspond
          end: reservation.end, // Assurez-vous que le nom du champ correspond
        };
      });

      // Mettez à jour les événements du calendrier avec les nouvelles données
      $("#calendar").fullCalendar("removeEvents"); // Supprimez les événements existants
      $("#calendar").fullCalendar("addEventSource", events); // Ajoutez les nouveaux événements
    })
    .catch((error) => {
      console.log(error);
    });
}

showResa();
