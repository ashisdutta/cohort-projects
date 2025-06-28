const catagoryUrl = "https://pokeapi.co/api/v2/type"




window.addEventListener("DOMContentLoaded", catagoryList);

async function catagoryList(){
    // create option, inside option append catagory one by one and at last append all the catagory to the select-catagory section 
    const mySelect = document.querySelector("#catagory");

    const response = await fetch(catagoryUrl);
    const data = await response.json();
    data["results"].length;
    for(let i=0; i<data["results"].length;i++){
        const newOption = document.createElement("option");
        const newCatagory = data["results"][i]["name"];
        const addingName = newOption.innerText = newCatagory;
        mySelect.appendChild(newOption);
    }

}


function createCardDiv(){
    const newDiv = document.createElement("div");
    const cardName = document.createElement("h4");
    const cardImg = document.createElement("img")
    const cardType = document.createElement("p");

    newDiv.appendChild(cardName);
    newDiv.appendChild(cardImg);
    newDiv.appendChild(cardType);

    return {
        card: newDiv,
        nameEl: cardName,
        imgEl: cardImg,
        typeEl: cardType
    };
}


document.getElementById("generate-card").addEventListener("click", ()=>{
    const mySelect = document.getElementById("catagory");
    const selectedType = mySelect.value;
    const selectedNumber = document.getElementById("cardCount");
    const N = Number(selectedNumber.value);
    
    cardGenerator(selectedType, N);
});

async function cardGenerator(type, N){
    document.querySelector(".all-cards").innerHTML = "";

    const response = await fetch(`${catagoryUrl}/${type}`);
    const data = await response.json();
    //console.log(data);

    for(let i=0; i<N; i++){
        const cardElements = createCardDiv();

        cardElements.nameEl.innerHTML = data["pokemon"][i]["pokemon"]["name"];
        const image_url = data["pokemon"][i]["pokemon"]["url"];
        //console.log(image_url);
        const imageResponse = await fetch(image_url);
        const imageValue = await imageResponse.json();
        console.log(imageValue);
        //console.log("Selected number of cards:", N);
        cardElements.imgEl.src = imageValue["sprites"]["back_default"];
        cardElements.typeEl.innerHTML = `Catagory: ${type}`;

        document.querySelector(".all-cards").appendChild(cardElements.card);
    }

}