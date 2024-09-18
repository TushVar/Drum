//document.querySelector("button").addEventListener("click",handleClick);

var nos = document.getElementsByTagName("button").length;
for (var i = 0; i < nos; i++) {
  document
    .getElementsByTagName("button")
    [i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttoninnerHTML = this.innerHTML;
  console.log(buttoninnerHTML);
  switch (buttoninnerHTML) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

      case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

/*
the above function can be written as
document.querySelector("button").addEventListener("click",function() {alert("I got Clicked");});
*/
