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

  /* $(".tag").click(function() {
    $(this).animate({
      position:
    }

    )
  }); */
});

$(document).ready(function() {
  $(".mindTopicPrev").hover(function() {
    $(this).toggleClass("hover");
  });
});

/* function whichTransitionEvent() {
  var t;
  var el = document.createElement('fakeelement');
  var transitions = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

var transitionEnd = whichTransitionEvent();
 */
$(document).ready(function() {
  $("button").click(function() {
    $(this).remove();
    $(".tag").css("visibility", "visible");
    $("svg").addClass("animationText");

    setTimeout(function() {
      $(".tag").css("pointer-events", "auto");
    }, 4000);

    /* text.forEach(t => {
      t.addEventListener("animationed", console.log("end")); */
  });
});

var prevClicked;

$(document).ready(function textPrevClick() {
  $(".mindTopicPrev").click(function() {
    if (prevClicked != null) {
      $(prevClicked).toggleClass("read");
    }

    $(this).toggleClass("read");
    prevClicked = this;
  });
});
