var isBlue = false;
var body = document.querySelector("body");
var bg = body.style.background;

function changeColor(){
  if( isBlue ){
    body.style.background = "red";
  } else{
    body.style.background = bg;
  }
  isBlue = !isBlue;
}

// This is a JS built-in. The effect is obviously just to
// switch background colors every 1000ms.
// setInterval(changeColor, 1000);


$('.contact').popover({
  placement: "bottom",
  html: true,
  sanitize: false,
  title: function(){
    return $("#contact-head").html();
  },
  content: function(){
    return $("#contact-content").html();
  }
});

$('.about-me').popover({
  placement: "bottom"
});
