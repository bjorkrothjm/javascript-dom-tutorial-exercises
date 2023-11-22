let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let selectElement =  document.getElementById("mySelect")

for (let country in countries){
    console.log(country)
    let newOption = document.createElement("option");
    newOption.innerHTML = countries[country];
    newOption.setAttribute("value", countries[country]);
    selectElement.appendChild(newOption);
}

// for (let i = 0; i < countries.length; i++) {
//     let option = document.createElement("option");
//     option.value = countries[i];
//     option.innerHTML = countries[i];
//     selectElement.appendChild(option);
//   }

selectElement.addEventListener('change', function() {
    console.log(selectElement.value)
    let selectCountry = selectElement.value;
    alert(selectCountry);
})
