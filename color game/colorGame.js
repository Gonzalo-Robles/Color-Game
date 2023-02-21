//primero declaro todos los eventos
//declaro nombre de la variable que lo identifique y luego
// el tipo identificacion es... p id class etc

let colorDisplay=document.querySelector("#colorDisplay")
let menssage= document.querySelector("#message")
let botonReset=document.querySelector("#reset")
let easyButton=document.querySelector("#easyButton")
let hardButton=document.querySelector("#hardButton")
let square=document.querySelectorAll(".square")
let cantidadCuadros=9
let colors = generateRandomColors (cantidadCuadros)
let pickedColor = pickColor()

//mantengo sin color los botones easy y hard
hardButton.classList.remove("selected")
easyButton.classList.remove("selected")
expertButton.classList.add("selected")

//________ FUNCIONES_______
// genero 3 strings aleatorios con un numero del 0 al 255
// luego los concateno y envio en un string compuesto
function randomColor() {
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
//hago un recorrido del tamaño cantidad, ingresando en cada 
// uno de los arrays un random color
function generateRandomColors(cantidad){
    let array=[];
    console.log("Ingresaron... "+cantidad)
    for (let index = 0; index < cantidad; index++) {
        array[index]=randomColor()
        console.log(array[index])
    }
    console.log(array)
    return array
}

generateRandomColors(cantidadCuadros)
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
function detector(){
let clickedColor = this.style.background;
console.log("valor de clickedColor "+clickedColor)
console.log("valor de color"+pickedColor)
        if(clickedColor === pickedColor){
            message.textContent = "Correcto!" //en la pantalla sale este mensaje
            botonReset.textContent="Juga de nuevo!"
            botonReset.addEventListener("click",reset)
            //pinto todos los cuadros del color correcto del desafio
            for (let i = 0; i < cantidadCuadros; i++){
                square[i].style.background = pickedColor;
                colorDisplay.style.background = pickedColor;
            }
        }
        else if (clickedColor != pickedColor){
            // desaparezco el cuadro poniendo transparente como color de fondo
            this.style.backgroundColor = "rgba(1,1,1,0)"
            message.textContent = "Intentalo Nuevamente"
            setTimeout(function(){
                message.textContent=" "
            }, 800);
            
        }  
} 
//________ Doy vida a los botones del html __________
//_______________BOTON EASY___________________
easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected")
    //easyButton.addEventListener("click",reset)
    expertButton.classList.remove("selected")
    hardButton.classList.remove("selected")
    colorDisplay.style.background=""
    cantidadCuadros=3
    
    colors=generateRandomColors(cantidadCuadros)

    pickedColor = pickColor()
    colorDisplay.textContent =pickedColor 
    reset.addEventListener("click",reset)
   
    for(let i = 0; i < (square.length); i++) {
       
        if (colors[i]) {
          square[i].style.background = colors[i]
        }
        else{
            square[i].style.background = "none"
            square[i].style.background= "block"
        }
      }
    
})


//__________________HARD_______________________
hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected")
   // hardButton.addEventListener("click", reset)
    expertButton.classList.remove("selected")
    easyButton.classList.remove("selected")
    colorDisplay.style.background=""
    cantidadCuadros=6
    
    colors=generateRandomColors(cantidadCuadros)
    pickedColor = pickColor()
    colorDisplay.textContent =pickedColor 
    for(let i = 0; i < (square.length); i++) {      
        
        if (colors[i]) {
          square[i].style.background = colors[i]
        } 
        else{
            square[i].style.background = "none"
            square[i].style.background= "block"
        }
        

      }
   
   
})
//__________________EXPERTO__________________________
expertButton.addEventListener("click", function(){
    expertButton.classList.add("selected")
    hardButton.classList.remove("selected")
    easyButton.classList.remove("selected")
    colorDisplay.style.background=""
    //expertButton.addEventListener("click",reset)
    cantidadCuadros=9

    colors=generateRandomColors(cantidadCuadros)

    pickedColor = pickColor()
    colorDisplay.textContent =pickedColor 
    console.log(colors)
    console.log(square.length)
    cantidadCuadros=9
     for(let i = 0; i < (square.length); i++) {
          square[i].style.background = colors[i]
          //square[i].style.border= "none"
        }
      
})

//________________BOTON RESET____________________
reset.addEventListener("click", function(){
    botonReset.textContent="Nuevos colores"
    message.textContent = ""
    colorDisplay.style.background=""
    colors=generateRandomColors(cantidadCuadros)
    pickedColor = pickColor()
    colorDisplay.textContent =pickedColor 
    
    for(let i = 0; i < square.length; i++) {
        square[i].style.background = colors[i]
    }

})

//______________HASTA ACA LOS BOTONES____________

// ingreso el color a buscar cargado por el random obtenido
// en pickedColor

colorDisplay.textContent = pickedColor

//__________________Deteccion del cuadro correcto_______________________
console.log("En el for "+colors.length)
for (let i = 0; i < colors.length; i++) {
    square[i].style.background = colors[i] // Paso 2

botonReset.addEventListener("click",reset)

//__________________Deteccion del cuadro correcto_______________________
    square[i].addEventListener("click" , detector)
}

//______________________boton de ayuda__________________________
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});