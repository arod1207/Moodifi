// possibly use later //

// var url = $("#url").val();

// $(".submitBtn").on("click", function (e) {
//   e.preventDefault();

//   var url = $("#url").val();
//   console.log(url);
//   var settings = {
//     async: true,
//     crossDomain: true,
//     url: `https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect?return_attributes=emotion&image_url=${url}`,
//     method: "POST",
//     headers: {
//       "x-rapidapi-host": "faceplusplus-faceplusplus.p.rapidapi.com",
//       "x-rapidapi-key": process.env.XRAPID_KEY,
//       "content-type": "application/x-www-form-urlencoded",
//     },
//     data: {},
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     let anger = response.faces[0].attributes.emotion.anger;
//     let happiness = response.faces[0].attributes.emotion.happiness;
//     let neutral = response.faces[0].attributes.emotion.neutral;

//     if (anger > 50) {
//       window.location = "/playlist/moods/angry";
//     } else if (neutral > 50) {
//       window.location = "/playlist/moods/sad";
//     } else if (happiness < 50) {
//       window.location = "/playlist/moods/sad";
//     } else {
//       window.location = "/playlist/moods/happy";
//     }
    
//   });
//   document.getElementById("url").value = '';
// });
