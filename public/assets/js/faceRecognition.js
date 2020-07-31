function setup() {
  $(".turnOnBtn").click(function (e) {
    e.preventDefault();
    noCanvas();
    video = createCapture(VIDEO);
    video.position(150,150);
    video.center();
    filter(THRESHOLD);
    image(video, 0, 0);

    $(".picBtn").click(function (e) {
      e.preventDefault();
      video.loadPixels();
      const image64 = video.canvas.toDataURL();

      const api_url = "https://api-us.faceplusplus.com/facepp/v3/detect";

      $.ajax({
        url: api_url,
        method: "POST",
        data: {
          api_key: process.env.API_KEY,
          api_secret: "6bQwRGbsaITtTpesTh6pH_ftFKsJJNT2",
          image_base64: `${image64}`,
          return_attributes: "emotion",
        },
      }).done((data) => {
        console.log(data);
        let anger = data.faces[0].attributes.emotion.anger;
        let happiness = data.faces[0].attributes.emotion.happiness;
        let neutral = data.faces[0].attributes.emotion.neutral;

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
  });
}