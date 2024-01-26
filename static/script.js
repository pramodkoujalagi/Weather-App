function getWeather() {
    var city = document.getElementById('cityInput').value;
    fetch('/weather/' + city)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Temperature (Kelvin):</strong> ${data.main.temp}</p>
                <p><strong>Temperature (Celsius):</strong> ${data.celsius.toFixed(2)}</p>
                <p><strong>Temperature (Fahrenheit):</strong> ${data.fahrenheit.toFixed(2)}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Error fetching weather data.</p>`;
        });
}
