const playliste = document.querySelector("#playliste");

const mitArray = ["On My Mama", "Si tu m'aimes demain", "Jet Fuel", "Sunlight", "Gone Girl", "Sugar", "yes, and?", "Coyote", "imagine", "That Life"];

console.log(mitArray);

const nytArray = mitArray.map((element) => `<li>${element}</li>`);

console.log(nytArray);

const string = nytArray.join("");

console.log(string);

document.querySelector("ul").innerHTML = string;
