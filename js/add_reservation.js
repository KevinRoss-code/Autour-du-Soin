function add_reservation() {
  let nameOfPerson = document.getElementById("inputResa").value;
  let dayOfReservation = document.getElementById("inputdayResa").value;
  let timeOfreservation = document.getElementById("inputTimeResa").value;

  const formData = new FormData();
  formData.append("persons_name", nameOfPerson);
  formData.append("date_of_reservation", dayOfReservation);
  formData.append("start_reservation", timeOfreservation);

  axios
    .post("../serveur/add_reservation.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the correct content type for file upload
      },
    })
    .then((response) => {
      const responseData = response.data;
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

const formulaireNail = document.getElementById("sendReservation");
formulaireNail.addEventListener("click", add_reservation);
