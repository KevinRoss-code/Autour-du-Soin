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

function getReservedTimesForDate(date) {
  const formattedDate = moment(date).format("YYYY-MM-DD");
  const reservationsForDate = reservationsData.filter(function (reservation) {
    return reservation.date_of_reservation === formattedDate;
  });
  return reservationsForDate.map(function (reservation) {
    return reservation.start_reservation;
  });
}

function updateSelectOptions(reservedTimes) {
  const selectElement = $("#selectedTime");
  let heure = reservedTimes.toString();
  let newHeure = heure.replace(/:00$/, "");
  console.log(newHeure);
  // Itérer à travers les options du select
  selectElement.find("option").each(function () {
    const optionValue = $(this).val();
    // console.log(optionValue);
    // if (optionValue == newHeure) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }
    // Vérifier si la valeur de l'option est présente dans reservedTimes
    if (newHeure.includes(optionValue)) {
      // Supprimer l'option si la valeur est réservée
      $(this).remove();
    }
  });
}
