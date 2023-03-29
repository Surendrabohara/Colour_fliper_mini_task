const newColorBtnElement = document.getElementById('new-color-button');
const currentColorElement  = document.getElementById('current-color');


const hexValues =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


// click on button 
newColorBtnElement.addEventListener('click', ()=>{
   console.log('clicked');
   let hexColor = "#";
   for(let i = 0; i < 6; i++){
    hexColor +=hexValues[Math.floor(Math.random() * hexValues.length)]
   }
   hexColor.textContent = hexColor;
   currentColorElement.innerHTML = hexColor;
   document.body.style.backgroundColor = hexColor;
});


// function getRandomHexValues(){
//     const randomIndexPosition =Math.floor(Math.random() * hexValues.length);
//     const randomHexValues = hexValues[randomIndexPosition];
//     return randomHexValues;
// }