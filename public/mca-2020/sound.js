var button_sound = document.getElementById("actualStartButton");
// console.log(button_sound)
button_sound.addEventListener("click", () => {
  var audio_sound = new Audio();
  audio_sound.src = "public/mca-2020/sound.mp3";
  audio_sound.loop = true;
  audio_sound.play();
});
