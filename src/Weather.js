import axios from "axios";

export default function Weather() {

  function handleResponse(response) {
    alert (`The weather in Kansas City is ${response.data.main.temp}°F`)
  }

  let apiKey = "3fd0b2514fdddeb5a1773faa623df844";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kansas City&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
}