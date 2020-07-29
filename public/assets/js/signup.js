// $(document).ready(function() {

// // let signup = $("#signup");
// let username = $("#username").val();
// let password = $("#password").val();


// $(".signupBtn").on('submit', (event) => {
//   event.preventDefault();
//   console.log('clicked')
//   let userData = {
//     USERNAME: username,
//     PASSWORD: password
//   };
//   if (!userData.username || userData.password) {
//     return;
//   }
//   signUpUser(userData.username, userData.password);
//   username.val("");
//   password.val("")
// });



// function signUpUser(username, password) {
//   $.post("/api/signup", {
//     USERNAME: username,
//     PASSWORD: password
//   }).then((data) => {
//     window.location("/playlist/moods/sad")
//   })
// }


// });