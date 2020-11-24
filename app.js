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



 