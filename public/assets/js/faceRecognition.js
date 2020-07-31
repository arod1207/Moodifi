// possibly use later //

var base_64 = $("#base64").val();

function setup() {
  $(".submitBtn").on("click", function (e) {
    e.preventDefault();

    noCanvas();
    const video = createCapture(VIDEO);

    var url = $("#base64").val();
    console.log(url);
    var settings = {
      async: true,
      crossDomain: true,
      url: `https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect?return_attributes=emotion&image_base64=${url}`,
      method: "POST",
      headers: {
        "x-rapidapi-host": "faceplusplus-faceplusplus.p.rapidapi.com",
        "x-rapidapi-key": process.env.XRAPID_KEY,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: {},
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      let anger = response.faces[0].attributes.emotion.anger;
      let happiness = response.faces[0].attributes.emotion.happiness;
      let neutral = response.faces[0].attributes.emotion.neutral;

      if (anger > 50) {
        window.location = "/playlist/moods/angry";
      } else if (neutral > 50) {
        window.location = "/playlist/moods/sad";
      } else if (happiness < 50) {
        window.location = "/playlist/moods/sad";
      } else {
        window.location = "/playlist/moods/happy";
      }
    });
  });
}
