var button_sound = document.getElementById("actualStartButton");
// console.log(button_sound)
button_sound.addEventListener("click", function () {
  var audio_sound = new Audio();
  audio_sound.src = "./sound.mp4";
  audio_sound.loop = true;
  audio_sound.play();
});
