const apiKey = 'a79c51734353ed31ce46b84f1c06c92d';

function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    document.getElementById('weatherResult').innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <img src="${weatherIcon}" alt="${data.weather[0].description}">
                        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
                        <p><strong>Description:</strong> ${data.weather[0].description}</p>
                        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                    `;
                } else {
                    document.getElementById('weatherResult').innerHTML = `<p>City not found! Please try again.</p>`;
                }
            })
            .catch(error => {
                document.getElementById('weatherResult').innerHTML = `<p>Error fetching data! Please try again later.</p>`;
            });
    } else {
        document.getElementById('weatherResult').innerHTML = `<p>Please enter a city name!</p>`;
    }
}
