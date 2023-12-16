function add_reservation() {
  let nameOfPerson = document.getElementById("selectedName").value;
  let dayOfReservation = document.getElementById("selectedDate").value;
  let timeOfreservation = document.getElementById("selectedTime").value;

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

const formulaireResa = document.getElementById("sendReservation");
formulaireResa.addEventListener("click", add_reservation);
