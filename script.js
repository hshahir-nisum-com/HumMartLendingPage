more = document.getElementById("more").onmouseover = () => {
  temp = document.getElementById("MoreBlock");

  temp.style.display = "flex";
  temp.onmouseleave = () => {
    temp.style.display = "none";
    console.log(1);
  };
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 1 seconds
}

function openNav() {
  document.getElementById("side-nav-mbl").style.marginLeft = "0px";
  document.getElementById("side-nav-mbl").style.display = "inline-block";
}

function closeNav() {
  document.getElementById("side-nav-mbl").style.marginLeft = "-300px";
}




window.onscroll = changePos;

function changePos() {
  var header = document.getElementById("mySidenav");
  if (window.pageYOffset > 185) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.width = "100%";
  } else {
    header.style.position = "";
    header.style.top = "";
  }
}




// const flavoursContainer = document.getElementById("slider");
// const flavoursScrollWidth = flavoursContainer.scrollWidth;
// console.log(flavoursContainer.children)
// window.addEventListener("load", () => {
//   self.setInterval(() => {
//     if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//       flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
//     }
//   }, 100);
// });

// radio1 = document.getElementById("firstRadioBtn").checked = true;

// function radioButton1() {
//   radio1 = document.getElementById("firstRadioBtn").checked;
//   radio2 = document.getElementById("secondRadioBtn").checked;

//   if (radio1) {
//     console.log("radio1");
//     document.getElementById("secondRadioBtn").checked = false;

//     if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//       flavoursContainer.scrollTo(200, 0);
//     }
//   }
// }

// function radioButton2() {
//   radio1 = document.getElementById("firstRadioBtn").checked;
//   radio2 = document.getElementById("secondRadioBtn").checked;
//   if (radio2) {
//     console.log("radio2");
//     document.getElementById("firstRadioBtn").checked = false;
//     if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//       flavoursContainer.scrollTo(400, 200);
//     }
//   }
// }

