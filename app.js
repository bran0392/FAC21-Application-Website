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
            const pictures = document.getElementsByClassName("slides"); //grab slide

            console.log(pictures);

            //Automatic Play
            function showAllSlides(){
              for(let i = 0; i < pictures.length; i++){
                pictures[i].style.display= "none"; //hidding the image that is not iterated on
              }

                    slideIndex++;

              if(slideIndex > pictures.length){
                slideIndex = 1;
              }
              pictures[slideIndex-1].style.display = "block";
            }

            function showStop(){
              clearInterval(timer);
            }

            function restartShow(){
              timer = setInterval(showAllSlides, 3000);
            }

            pictures[0].addEventListener("mouseover", showStop);
            pictures[0].addEventListener("mouseleave", restartShow);


 //PAUSE BUTTON FUNCTION
            var pauseButton = document.getElementById("pause");          //Grab pause button
            let play = true;
            function stopStart(){
              if (play){
                clearInterval(timer); 
                pauseButton.innerHTML = "Play me";
                play = false; 
              } else {
                play = true;
                timer = setInterval(showAllSlides, 4000);
                pauseButton.innerHTML = "Pause me";
              }
            }
            pauseButton.addEventListener("click", function(){
            stopStart();
            });

  //Next & Previous Button

            let next = () => {
              slideIndex >= pictures.length-1 ? slideIndex = 0 : slideIndex++
              showAllSlides(slideIndex)
            }

          document.querySelector(".fas fa-arrow-left").addEventListener('click', next())
          console.log(next);
            
