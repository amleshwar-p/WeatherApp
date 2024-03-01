


// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const weather = document.getElementById("data-w");
const search = document.getElementById("search");
const btn = document.getElementById("search-btn")



const AccuWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    weather.innerHTML = `<h1>Loading....</h1>`

    const response = await fetch(url);

    const data = await response.json();

    return showWeather(data);
}

const showWeather = (data) => {

    if (data.cod == "404") {
        weather.innerHTML = '<h1> City not found </h1>'
        return; F

    }


    console.log(data)
    weather.innerHTML = `
    <img width="48" height="48" src="https://img.icons8.com/emoji/48/cloud-emoji.png" class="temp-img" />
                <h2 class="temp">${data.main.temp}&#176;C</h2>
                <h2 class="city"> ${data.name}</h2>
                <div class="details">
                
                <i class="fa-light fa-wind fas" style="color: #ffffff;"></i>
                    <h3 class="temp-type">Clouds</h3>
                </div> 
    `

}

btn.addEventListener("click", function (event) {
    AccuWeather(search.value)
    event.preventDefault();
})



