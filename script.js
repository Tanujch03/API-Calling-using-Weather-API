const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById('city-name');
const citytime = document.getElementById('city-time');
const citytemp = document.getElementById('city-temp');


async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=a804c4daac0c40d2bde164351242102&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}


button.addEventListener("click",async()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},
    ${result.location.region} - ${result.location.counrty}`;

    citytime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
})
// http://api.weatherapi.com/v1/current.json?key=a804c4daac0c40d2bde164351242102&q=London&aqi=yes
