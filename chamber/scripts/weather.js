// select html element in the document
const myTown =document.querySelector('#town');
const myDiscription = document.querySelector('#discription');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
// create the required valiable for the URL
const myKey = "62e29bfef4ac3df6b46137f52778a0dd";
const myLat = "30.121728";
const myLong = "-1.924273";

// construct a full path using template literals

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
// try to grab current weather data
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// display json data onto my web page
function displayResults(data) {
    myTown.innerHTML = data.name;
    myDiscription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    //myGraphic.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}


apiFetch();