const apiKey = 'a79c51734353ed31ce46b84f1c06c92d'; 

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('weatherResult').innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                    `;
                } else {
                    document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
                }
            })
            .catch(error => {
                document.getElementById('weatherResult').innerHTML = `<p>Error fetching data!</p>`;
            });
    } else {
        document.getElementById('weatherResult').innerHTML = `<p>Please enter a city name!</p>`;
    }
}
