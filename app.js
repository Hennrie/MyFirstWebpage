const text = document.querySelectorAll(".animationText path");

for (let i = 0; i < text.length; i++) {
  console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
}

$(document).ready(function () {
  $("a.scrollTopicLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top - 100 },
      "slow"
    );
  });
});

$(document).ready(function () {
  $(".mindTopicPrev").hover(function () {
    $(this).toggleClass("hover");

  });
});

$(document).ready(function () {
  $("button").click(function () {
    $(this).remove();
    $(".tag").css({ "visibility": "visible", "pointer-events": "auto" });
    $("svg").addClass("animationText");

  });
});


$(document).ready(function () {
  $(".mindTopicPrev").click(function () {
    $(this).toggleClass("read");
    $(this).toggleClass("hover");

  });
});

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
