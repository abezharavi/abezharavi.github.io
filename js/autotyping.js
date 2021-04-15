typing_effect(['developer'], ['#000000']);

      function typing_effect(words, colors) {

      var cursor = document.getElementById('cursor'); //cursor
      var text = document.getElementById('text') //text

      var blink = true;
      var wait = false;
      var letters_count = 1;
      var temp = 1;

      window.setInterval(function () { //wait between words when it starts writting
        if (letters_count === 0 && wait === false) {
          wait = true;

          text.innerHTML = '' // leave a blank
          window.setTimeout(function () {
            var usedWord = words.splice(0, 1)[0]
            words.push(usedWord);
            temp = 1;
            text.style.color = colors[0]
            letters_count += temp;
            wait = false;
          }, 1000)
        } else if (letters_count === words[0].length + 1 && wait === false) {
          wait = true;
          window.setTimeout(function () { //wait a bit until words finished and start deleting
            temp = -1;
            letters_count += temp;
            wait = false;
          }, 1000)
        } else if (wait === false) { //write words
          text.innerHTML = words[0].substr(0, letters_count)
          letters_count += temp;
        }
      }, 50)
      window.setInterval(function () {
        if (blink) {
          cursor.style.opacity = "0";
          blink = false;
        } else {
          cursor.style.opacity = "1";
          blink = true;
        }
      }, 400)
    }

// 3d card effect

    let myPanel = document.getElementById("panel");
    let subpanel = document.getElementById("panel-container");

    myPanel.onmousemove = transformPanel;
    myPanel.onmouseenter = handleMouseEnter;
    myPanel.onmouseleave = handleMouseLeave;

    let mouseX, mouseY;

    let transformAmount = 5;

    function transformPanel(mouseEvent) {
        mouseX = mouseEvent.pageX;
        mouseY = mouseEvent.pageY;

        const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
        const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

        const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
        const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

        subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
    }

    function handleMouseEnter() {
        setTimeout(() => {
            subpanel.style.transition = "";
        }, 100);
        subpanel.style.transition = "transform 0.1s";
    }

    function handleMouseLeave() {
        subpanel.style.transition = "transform 0.1s";
        setTimeout(() => {
            subpanel.style.transition = "";
        }, 100);

        subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
    }

// project cards
$(document).ready(function(){
  var zindex = 10;

  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }

  });
});
