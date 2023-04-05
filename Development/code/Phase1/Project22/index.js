const form = document.querySelector("form");
const input = document.querySelector("#city");
const weatherDiv = document.querySelector("#weather");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = input.value;
  const apiKey = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
  const url = `http://localhost:8000/api/weather/${city}?apiKey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather;
      const message = `The weather in ${city} is ${weather}`;
      weatherDiv.innerText = message;
    })
    .catch((error) => {
      const message = `There was an error getting the weather for ${city}`;
      weatherDiv.innerText = message;
    });
});
