
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var isOpened = false;
console.log([img1,img2]);
img1.addEventListener('click', openSlide);
img2.addEventListener('click', openSlide);

function openSlide(e){
  e.preventDefault();
  e.stopPropagation();
  if(!isOpened){
    console.log("Entro");
      img1.className += " opened";
      img2.className += " opened";
      isOpened = true;
  }
}
