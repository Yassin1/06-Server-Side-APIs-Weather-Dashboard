const apikey = "4c5d021f48fdaa12466beae03411a9eb"


function getapidata(cityname) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apikey + " ").then(response => response.json()).then(function (data) {
        console.log(data);
    })
}

getapidata() 


const app  = {
    init: () => {
        document.getElementById('btnget').addEventListener('click', app.fetchWeather);
       },
       
       fetchWeather: (ev) => {
        
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let apikey = '4c5d021f48fdaa12466beae03411a9eb';
        let lang = 'en';
        let units = 'metric';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apikey + " ").then(response => response.json()).then(function (data)`;
       
        fetch(url)
          .then((resp) => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            app.showWeather(data);
          })
          .catch(console.err);
      },
}


