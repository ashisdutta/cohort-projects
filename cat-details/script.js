const URL = "https://catfact.ninja/fact";
const getdata = document.querySelector("#fact");
console.log("Script file loaded");

async function getFacts(){
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    getdata.innerText = data.fact;
}

