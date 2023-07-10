let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
//console.log(countries);

//let mySelect = document.querySelector("#mySelect");
//console.log(mySelect);

// mySelect.onload = (countries) =>{
//     for (const country of countries){
//         console.log(country)
//         addCountry = `<option value="-1">${country}</option>`;
//         mySelect.appendChild(addCountry);
//         console.log(addCountry);
//     };
//     console.log(mySelect);
// }

window.onload = function(countries){
    console.log(countries);
    let mySelect = document.querySelector("#mySelect");
    console.log(mySelect);
    for (let country of countries){
        console.log(country)
        addCountry = `<option>${country}</option>`;
        mySelect.appendChild(addCountry);
        console.log(addCountry);
    };
    console.log(mySelect);
}



// window.addCountries = function addCountries(countries){
//     let mySelect = document.querySelector("#mySelect")
//     for (const country of countries){
//         addCountry = `<option value="-1">${country}</option>`;
//         mySelect.appendChild(addCountry);
//     };
//     console.log(mySelect)
// }