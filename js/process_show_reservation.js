let reservationsData = [];

function showResa() {
  $.ajax({
    url: "../serveur/process_show_reservation.php",
    type: "GET",
    dataType: "json",
    success: function (reservations) {
      reservationsData = reservations; // Stocker les réservations dans la variable globale
      reservations.forEach(function (reservation) {
        $("#calendar").fullCalendar(
          "renderEvent",
          {
            title: reservation.persons_name,
            start:
              reservation.date_of_reservation +
              "T" +
              reservation.start_reservation,
          },
          true
        );
      });
    },
    error: function (error) {
      console.log("Erreur lors de la récupération des réservations:", error);
    },
  });
}

function isDateReserved(date) {
  return reservationsData.some(function (reservation) {
    return date.isSame(
      moment(
        reservation.date_of_reservation + "T" + reservation.start_reservation
      )
    );
  });
}

function openModal(date, time) {
  $("#modalDate").text(date);
  $("#modalTime").text(time);
  $(".modal").css("display", "block");
}

function closeModal() {
  $(".modal").css("display", "none");
}

function submitReservation() {
  // Ajoutez ici le code pour soumettre la réservation
  closeModal();
}
