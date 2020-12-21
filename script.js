

more = document.getElementById('more').onmouseover = () =>{
    temp = document.getElementById('MoreBlock');
    temp.style.display = "flex";
    temp.onmouseleave =()=>{
        temp.style.display = "none"
        console.log(1)
    }
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1000); // Change image every 1 seconds
}



function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



const flavoursContainer = document.getElementById('slider');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    }
  }, 100);
});

radio1 = document.getElementById("firstRadioBtn").checked = true

function radioButton1(){

  radio1 = document.getElementById("firstRadioBtn").checked
  radio2 = document.getElementById("secondRadioBtn").checked

if ( radio1){
  console.log("radio1")
  document.getElementById("secondRadioBtn").checked = false
  
    if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(200, 0);
    }
  }
  

}

function radioButton2(){
  radio1 = document.getElementById("firstRadioBtn").checked
  radio2 = document.getElementById("secondRadioBtn").checked
if (radio2){
  console.log("radio2")
  document.getElementById("firstRadioBtn").checked = false
  if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
    flavoursContainer.scrollTo(400, 200);
  }
}
}






