const key = "469763d93339d3a4328510636fdd374e";
const url = 'https://api.openweathermap.org/data/2.5/weather?q='

var search = document.querySelector('.ri-search-line');
search.addEventListener('click', () => {
    var cityName = document.querySelector('input').value;
    console.log(cityName);
    if (cityName.trim() == "") {
        alert('write the city name');
        return;
    }



    async function checkWeather() {
        const response = await fetch(url + `${cityName}&units=metric&appid=${key}`);
        var data = await response.json();
        console.log(data);

        if (data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${parseFloat(data.main.temp).toFixed(0)}°C`;

        document.querySelector('.humidity').innerHTML = `${data.main.humidity}% </br>humidity`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h </br> wind speed `;

        const img = document.querySelector('.imgg');
        const cloud = data.clouds.all;
        console.log(cloud)
        if (cloud >= 80) {
            img.src ='./night cloud.jfif'

        }else if(cloud >= 70) {
            img.src = './cloud.webp'

        }
        else if(cloud >= 50) {
            img.src = './1.jpg'

        }


    }
    checkWeather();
});
