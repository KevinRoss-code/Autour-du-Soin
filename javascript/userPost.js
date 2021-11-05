let form = document.getElementById("formulaire");

if(form){
form.addEventListener("submit", function (e) {
    
    e.preventDefault();
    let user = {}
    let formData = new FormData(this);
     user.name= formData.get('user_name');
    user.surname = formData.get('user_surname');
    user.email = formData.get('user_email');
    user.password = formData.get('user_password');
    for (const entry of formData.entries()) {
        user[entry[0]] = entry[1];
    }
    const myHeaders = new Headers({
        'Content-Type' : "application/json"
    });
    fetch('http://localhost:8080/api/auth/inscription', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(user, null, 0)
        }).then(response => response.json()).then(result => {
            console.log(result );
            console.log("hello");
            localStorage.setItem('user', JSON.stringify(result));
        });
  
    
})
}
// let requestBody = {user};
// console.log(requestBody);

    // console.log(user);
// let user = {
    //     name: document.getElementById("name").value,
    //     surname: document.getElementById("surname").value,
    //     email: document.getElementById("email").value,
    //     password: document.getElementById("password").value,
    // };
    // formData.append("user", `${user}`);
// getDevices = async () => {
//     const settings = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type' : 'application/json',
//         }
//     };
//     try{
//         const fetchResponse = await fetch('http://localhost:8080/api/auth/inscription', settings);
//         const data = await fetchResponse.json();
//         return data;
//     }catch (e) {
//         return e
//     }
// }

