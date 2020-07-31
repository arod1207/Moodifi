// $(document).ready(function() {
//   const username = $('#username').val();
//   const password = $("#password").val();
  

//   $('#signUpBtn').on("submit", function(event) {
//     event.preventDefault();
//     var userData = {
//       username: username,
//       password: password
//     };

//     if (!userData.username || !userData.password) {
//       return;
//     }

//     signUpUser(userData.username, userData.password);
//     username.val("");
//     password.val("");
//   });

//   function signUpUser(username, password) {
//     $.post("/signup", {
//       username: username,
//       password: password
//     })
//       .then(function(data) {
//         console.log('success')
//       })
//   }

// });
