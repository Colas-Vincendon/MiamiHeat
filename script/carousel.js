var container = document.getElementById("containerShop");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("slide").length;
var buttons = document.getElementsByClassName("btn");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = false;

var container2 = document.getElementById("containerShop2");
var slider2 = document.getElementById("slider2");
var slides2 = document.getElementsByClassName("slide2").length;
var buttons2 = document.getElementsByClassName("btn2");

var currentPosition2 = 0;
var currentMargin2 = 0;
var slidesPerPage2 = 0;
var slidesCount2 = slides2 - slidesPerPage2;
var containerWidth2 = container2.offsetWidth;
var prevKeyActive2 = false;
var nextKeyActive2 = false;

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function checkWidth2() {
  containerWidth2 = container2.offsetWidth;
  setParams2(containerWidth2);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

function setParams2(w) {
  if (w < 551) {
    slidesPerPage2 = 1;
  } else {
    if (w < 901) {
      slidesPerPage2 = 2;
    } else {
      if (w < 1101) {
        slidesPerPage2 = 3;
      } else {
        slidesPerPage2 = 4;
      }
    }
  }
  slidesCount2 = slides2 - slidesPerPage2;
  if (currentPosition2 > slidesCount2) {
    currentPosition2 -= slidesPerPage2;
  }
  currentMargin2 = -currentPosition2 * (100 / slidesPerPage2);
  slider2.style.marginLeft = currentMargin2 + "%";
  if (currentPosition2 > 0) {
    buttons2[0].classList.remove("inactive");
  }
  if (currentPosition2 < slidesCount2) {
    buttons2[1].classList.remove("inactive");
  }
  if (currentPosition2 >= slidesCount2) {
    buttons[1].classList.add("inactive");
  }
}

setParams();
setParams2();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideRight2() {
  if (currentPosition2 != 0) {
    slider2.style.marginLeft = currentMargin2 + 100 / slidesPerPage2 + "%";
    currentMargin2 += 100 / slidesPerPage2;
    currentPosition2--;
  }
  if (currentPosition2 === 0) {
    buttons2[0].classList.add("inactive");
  }
  if (currentPosition2 < slidesCount2) {
    buttons2[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}

function slideLeft2() {
  if (currentPosition2 != slidesCount2) {
    slider2.style.marginLeft = currentMargin2 - 100 / slidesPerPage2 + "%";
    currentMargin2 -= 100 / slidesPerPage2;
    currentPosition2++;
  }
  if (currentPosition2 == slidesCount2) {
    buttons2[1].classList.add("inactive");
  }
  if (currentPosition2 > 0) {
    buttons2[0].classList.remove("inactive");
  }
}

window.addEventListener("resize", checkWidth2);
window.dispatchEvent(new Event("resize"));

window.addEventListener("resize", checkWidth);
window.dispatchEvent(new Event("resize"));
