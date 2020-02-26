const text = document.querySelectorAll(".animationText path");

for (let i = 0; i < text.length; i++) {
  console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
}

$(document).ready(function() {
  $("a.scrollTopicLink").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top - 100 },
      "slow"
    );
  });
});

/* $(".scrollTopicLink").on("click", function(e) {
  e.preventDefault();
  var offset = 500;
  var target = this.hash;
  if ($(this).data("offset") != undefined) offset = $(this).data("offset");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top - offset
      },
      500,
      "swing",
      function() {
        // window.location.hash = target;
      }
    );
}); */

/* 
var elem = document.getElementById("musicLink");
var tag = document.getElementById("musicTag");
elem.addEventListener("mouseover", mouseOver);
elem.addEventListener("mouseout", mouseOut);

function mouseOver() {
  tag.classList.add("hover");
}

function mouseOut() {
  tag.classList.remove("hover");
} */
// $("musicLink").hover(
//   function() {
//     $("musicTag").addClass("hover");
//   },
//   function() {
//     $("musicTag").removeClass("hover");
//   }
// );
