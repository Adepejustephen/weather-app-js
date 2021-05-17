let weather = {
    apiKey: "0cc27e43f47aeb1a6659b6825e4b1ace",

    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=matric&appid="
            + this.apiKey
        )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data))
        


    },
    
    displayWeather: (data) => {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        const { country } = data.sys

        document.querySelector('.city').innerText = "weather in " + name;
        document.querySelector('.country').innerText = country
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.temp').innerText = temp + "℃";
        document.querySelector('.discription').innerText = description;
        document.querySelector('.humidity').innerText = "humidty: " + humidity + "%";
        document.querySelector('.wind').innerText = "wind speed: " + speed + "km/hr";

        document.querySelector('.weather').classList.remove('loading')

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-input").value)
    }
}

document.querySelector(".search button").addEventListener('click', () => {
    weather.search()
})

document.querySelector(".search-input").addEventListener("keyup", function (event) {
    
    if (event.key == "enter") {
        event.preventDefault();
        weather.search()
    }
})


weather.fetchWeather('Ilesha')
