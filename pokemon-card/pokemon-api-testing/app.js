// async function getPokemon() {
//   url = "https://pokeapi.co/api/v2/type"; //returns all type and an url
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data)
// //   console.log(data.pokemon[0]["pokemon"]["url"])
// //   console.log(data.results[0].name)
// }

// // Call it
// getPokemon();



// to get the name

// async function getPokemon2() {
//   //const url = "https://pokeapi.co/api/v2/type"; returns all type and an url
//   const url = "https://pokeapi.co/api/v2/type/water"
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data)
//   console.log(data.pokemon[0]["pokemon"]["name"])
//   console.log(data.pokemon[0]["pokemon"]["url"])
// }

// // Call it
// getPokemon2();




//to get the image
async function getPokemon3() {
  //const url = "https://pokeapi.co/api/v2/type"; returns all type and an url
  const url = "https://pokeapi.co/api/v2/pokemon/7/"
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  console.log(data.sprites["back_default"])
  //console.log(data.pokemon[0]["pokemon"]["url"])
  //console.log(data.results[0].name)
}

// Call it
getPokemon3();


