var tabs = document.querySelectorAll('.tab')
var tabContents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
   
  tab.addEventListener('click', (event) => {
     var targetTab = event.target.href
     var tabString = targetTab.split("#").pop();

     var tabElement = document.getElementById(tabString)
     //tabString represent the ID

     tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
     })

     tabs.forEach(tab => {
         tab.classList.remove('active')
     })
     //tab.classList.add('active') *alternative code*
     event.target.classList.add('active')
     tabElement.classList.add('active')
  })  
  
})

// Image Carousel
var slideIndex = 0;
var timer = setInterval(showAllSlides, 3000);

function showAllSlides(){
  var i; //iterator
  var picture = document.getElementsByClassName("slides"); //grab slide
  
  for(i=0; i < picture.length; i++){
    picture[i].style.display= "none"; //hidding the image that is not iterated on
    console.log(picture);
  }

  slideIndex++;
  if(slideIndex > picture.length){
    slideIndex = 1;
  }
  picture[slideIndex-1].style.display = "block";

}