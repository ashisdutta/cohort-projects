
const inputDiv = document.querySelector(".add-color");

const inputEl = inputDiv.querySelector("input");
const colorAddButton = inputDiv.querySelector("button")

colorAddButton.addEventListener("click", ()=>{
    newColorAdd();
});

function newColorAdd(){
    const newButton = document.createElement("button");
    newButton.innerText = inputEl.value.toLowerCase();
    document.querySelector(".color-buttons").appendChild(newButton);
    newButton.style.backgroundColor = newButton.innerText;
}



const clickbutton = document.querySelector(".color-buttons");

clickbutton.addEventListener("click", (event)=>{
    backgroundColorChanger(event);
})

function backgroundColorChanger(event){
    const getColor = event.target.innerText;        //event.target = the exact element that was clicked inside .color-buttons.
    document.querySelector("body").style.backgroundColor = getColor;
}