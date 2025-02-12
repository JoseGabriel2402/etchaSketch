let grid= document.getElementById("grid");
function colorChange(){
    grid.addEventListener("mouseover", (event)=> {
        let target= event.target
        target.style.backgroundColor=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`
    })}
 //gera quadrados com base nas dimensões da grid
function generateGrid() {
    let gridSide=prompt("how many pixels per side?")
    if (gridSide<=100) {
    let squareNumber=gridSide*gridSide
    let i=0;
    let squareSize= 800/gridSide
    colorChange()
    while (i!==squareNumber) {
        let square=document.createElement("div");
        square.classList.add("square");
        square.style.width=`${squareSize}px`
        square.style.height=`${squareSize}px`
        grid.appendChild(square)
        ++i
    }}
}
function gridReset() {
    let button= document.querySelector("button")
    button.addEventListener("click", ()=>{
    let squares=grid.querySelectorAll(".square")
    grid.replaceChildren()
    generateGrid()
})}

gridReset()

//falta permitir controle do usuario ao tamanho da grid e gerar nova grid ao apertar botão