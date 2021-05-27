let color = ["blue", "red", "yellow", "orange", "brown", "#1FDED8"];
let button1 = document.getElementById("color-button");
button1.addEventListener("click", function () {
  var randomColor = color[Math.floor(Math.random() * color.length)];
  document.querySelector("body").style.background = randomColor;
  // var hold=document.getElementById('board').getElementsByTagName('td')
  // document.getElementById('board').getElementsByTagName('td').style.background=randomColor
  // document.querySelector('td').style.background=randomColor
  document.getElementById("color-button").style.background = randomColor;
  var x;
  for (x = 0; x <= 40; x++) {
    var h1 = "row ";
    var temp = x;
    var h2 = temp.toString();
    var res = h1.concat(h2);
    console.log(res);
    var hold = document.getElementById(res);
    var y = hold?.getElementsByTagName("td");
    var i;
    for (i = 0; i < y?.length; i++) {
      y[i].style.background = randomColor;
    }
  }
});
