var apikey = "4c5d021f48fdaa12466beae03411a9eb"

function getapidata(cityname) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apikey + " ").then(response => response.json()).then(function (data) {
        console.log(data);
    })
}

getapidata("london");