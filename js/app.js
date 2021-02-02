
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
