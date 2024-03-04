let findInput = document.getElementById("findInput");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let place = document.querySelector(".place");
let forecastIcon = document.querySelector(".forecast-icon img");
let forecastIcon2 = document.querySelector(".forecastIcon2 img");
let umberElla = document.querySelector(".umberElla");
let wind = document.querySelector(".wind");
let compass = document.querySelector(".compass");
let num = document.querySelector(".num");
let custom = document.querySelector(".custom");
let custom2 = document.querySelector(".custom2");
let degrees2 = document.querySelector(".degree2");
let day2 = document.querySelector(".day2");
let num2 = document.querySelector(".num2");
let day3 = document.querySelector(".day3");
let num3 = document.querySelector(".num3");
let custom3 = document.querySelector(".custom3");
let degree3 = document.querySelector(".degree3");
let forecastIcon3 = document.querySelector(".forecastIcon3 img");
let submit = document.getElementById("submit");
let city;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var geoApi = fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            title: `Your city is ${data.city} and your country is ${data.countryName}`,
            text: "We get your city information 😁",
            icon: "success",
          });
          findInput.value = data.city;
          getMyInfo();
        });
    },
    function (error) {
      if (error.code === error.PERMISSION_DENIED) {
        Swal.fire({
          title: "Permission Denied",
          text: "Please allow geolocation to get your city information automatically",
          icon: "warning",
        });
      }
    }
  );
} else {
  Swal.fire({
    title: "Geolocation not supported",
    text: "Your browser does not support geolocation.",
    icon: "error",
  });
}

window.onload = function () {
  document.getElementById("findInput").focus();
};
findInput.addEventListener("input", () => {
  city = findInput.value.toLowerCase();
  console.log(city);
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7f0ab4f4c0e04fe0a09123317240401&q=${city}&q=07112&days=7`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      forecastIcon.setAttribute("src", `${data.current.condition.icon}`);
      place.innerHTML = data.location.name;
      num.innerHTML = `${data.current.temp_c} °C `;
      custom.innerHTML = data.current.condition.text;
      let currentDate = new Date();
      let today = currentDate.toLocaleDateString("en-US", {weekday: "long"});
      let todayNum = currentDate.getDate();
      let month = currentDate.toLocaleDateString("en-US", {
        month: "long",
      });
      date.innerHTML = `${todayNum} ${month}`;
      day.innerHTML = today;
      compass.innerHTML = data.current.wind_dir;
      wind.innerHTML = data.current.wind_kph;
      umberElla.innerHTML = `${data.current.gust_kph}  %`;
      var nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + 1);
      var nextDayOftoday = nextDay.toLocaleDateString("en-US", {
        weekday: "long",
      });

      day2.innerHTML = nextDayOftoday;
      degrees2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}  °C`;
      num2.innerHTML = `${data.forecast.forecastday[1].day.mintemp_c} °C`;
      custom2.innerHTML = data.forecast.forecastday[1].day.condition.text;
      forecastIcon2.setAttribute(
        "src",
        `${data.forecast.forecastday[1].day.condition.icon}`
      );
      var dayAfterTomorrow = new Date(currentDate);
      dayAfterTomorrow.setDate(currentDate.getDate() + 2);
      var dayAfterTomorrowOfWeek = dayAfterTomorrow.toLocaleDateString(
        "en-US",
        {weekday: "long"}
      );
      day3.innerHTML = dayAfterTomorrowOfWeek;
      degree3.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}  °C`;
      num3.innerHTML = `${data.forecast.forecastday[2].day.mintemp_c} °C`;
      custom3.innerHTML = data.forecast.forecastday[2].day.condition.text;
      forecastIcon3.setAttribute(
        "src",
        `${data.forecast.forecastday[2].day.condition.icon}`
      );
    });
});
submit.addEventListener("click", () => {
  city = findInput.value.toLowerCase();
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7f0ab4f4c0e04fe0a09123317240401&q=${city}&q=07112&days=7`
  )
    .then((res) => res.json())
    .then((data) => {
      forecastIcon.setAttribute("src", `${data.current.condition.icon}`);
      place.innerHTML = data.location.name;
      num.innerHTML = `${data.current.temp_c} °C `;
      custom.innerHTML = data.current.condition.text;
      let currentDate = new Date();
      let today = currentDate.toLocaleDateString("en-US", {weekday: "long"});
      let todayNum = currentDate.getDate();
      let month = currentDate.toLocaleDateString("en-US", {
        month: "long",
      });
      date.innerHTML = `${todayNum} ${month}`;
      day.innerHTML = today;
      compass.innerHTML = data.current.wind_dir;
      wind.innerHTML = data.current.wind_kph;
      umberElla.innerHTML = `${data.current.gust_kph}  %`;
      var nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + 1);
      var nextDayOftoday = nextDay.toLocaleDateString("en-US", {
        weekday: "long",
      });

      day2.innerHTML = nextDayOftoday;
      degrees2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}  °C`;
      num2.innerHTML = `${data.forecast.forecastday[1].day.mintemp_c} °C`;
      custom2.innerHTML = data.forecast.forecastday[1].day.condition.text;
      forecastIcon2.setAttribute(
        "src",
        `${data.forecast.forecastday[1].day.condition.icon}`
      );
      var dayAfterTomorrow = new Date(currentDate);
      dayAfterTomorrow.setDate(currentDate.getDate() + 2);
      var dayAfterTomorrowOfWeek = dayAfterTomorrow.toLocaleDateString(
        "en-US",
        {weekday: "long"}
      );
      day3.innerHTML = dayAfterTomorrowOfWeek;
      degree3.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}  °C`;
      num3.innerHTML = `${data.forecast.forecastday[2].day.mintemp_c} °C`;
      custom3.innerHTML = data.forecast.forecastday[2].day.condition.text;
      forecastIcon3.setAttribute(
        "src",
        `${data.forecast.forecastday[2].day.condition.icon}`
      );
    });
});
function getMyInfo() {
  city = findInput.value.toLowerCase();
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7f0ab4f4c0e04fe0a09123317240401&q=${city}&q=07112&days=7`
  )
    .then((res) => res.json())
    .then((data) => {
      forecastIcon.setAttribute("src", `${data.current.condition.icon}`);
      place.innerHTML = data.location.name;
      num.innerHTML = `${data.current.temp_c} °C `;
      custom.innerHTML = data.current.condition.text;
      let currentDate = new Date();
      let today = currentDate.toLocaleDateString("en-US", {weekday: "long"});
      let todayNum = currentDate.getDate();
      let month = currentDate.toLocaleDateString("en-US", {
        month: "long",
      });
      date.innerHTML = `${todayNum} ${month}`;
      day.innerHTML = today;
      compass.innerHTML = data.current.wind_dir;
      wind.innerHTML = data.current.wind_kph;
      umberElla.innerHTML = `${data.current.gust_kph}  %`;
      var nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + 1);
      var nextDayOftoday = nextDay.toLocaleDateString("en-US", {
        weekday: "long",
      });

      day2.innerHTML = nextDayOftoday;
      degrees2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}  °C`;
      num2.innerHTML = `${data.forecast.forecastday[1].day.mintemp_c} °C`;
      custom2.innerHTML = data.forecast.forecastday[1].day.condition.text;
      forecastIcon2.setAttribute(
        "src",
        `${data.forecast.forecastday[1].day.condition.icon}`
      );
      var dayAfterTomorrow = new Date(currentDate);
      dayAfterTomorrow.setDate(currentDate.getDate() + 2);
      var dayAfterTomorrowOfWeek = dayAfterTomorrow.toLocaleDateString(
        "en-US",
        {weekday: "long"}
      );
      day3.innerHTML = dayAfterTomorrowOfWeek;
      degree3.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}  °C`;
      num3.innerHTML = `${data.forecast.forecastday[2].day.mintemp_c} °C`;
      custom3.innerHTML = data.forecast.forecastday[2].day.condition.text;
      forecastIcon3.setAttribute(
        "src",
        `${data.forecast.forecastday[2].day.condition.icon}`
      );
    });
}
