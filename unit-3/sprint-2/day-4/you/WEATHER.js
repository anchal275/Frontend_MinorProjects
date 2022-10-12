async  function showData(){
    let city = document.querySelector("#city").value
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fce78fb87e17e1b54cf6accb57217e0`
    try{
       let res = await  fetch(url)
       let data = await res.json()
       console.log(data)
       displaydata(data)
    }
    catch(err){
        console.log(err)
    }
}

function displaydata(data){
    document.querySelector("#weatherData").innerHTML=""
    
    let map = document.querySelector("#gmap_canvas")
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    let city = document.createElement("h2")
    city.innerText= data.name

    let Temp = document.createElement("h2")
    Temp.innerText=`Temprature: ${data.main.temp}`

    let TempMin = document.createElement("h2")
    TempMin.innerText=` Min Temprature: ${data.main.temp_min}`

    let TempMax = document.createElement("h2")
    TempMax.innerText=` Max Temprature: ${data.main.temp_max}`

    let clouds = document.createElement("h2")
    clouds.innerText= `clouds: ${data.clouds.all}`

    let sunrise = document.createElement("h2")
    sunrise.innerText=`Sunrise: ${data.sys.sunrise}`

    let sunset  = document.createElement("h2")
    sunset .innerText=`Sunset : ${data.sys.sunset}`

    document.querySelector("#weatherData").append(city,Temp,TempMin,TempMax,clouds,sunrise,sunset)

}



function getLocation() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(pos) {
      const crd = pos.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      getWeatherOnLocation(crd.latitude, crd.longitude);
    }
  }

  getLocation()
  
  async function getWeatherOnLocation(lat, lon) {
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0fce78fb87e17e1b54cf6accb57217e0`;
    try{
        let res = await fetch(url1)
        let data = await res.json()
        console.log(data)
        displaydata(data)
    }
    catch(err){
    console.log(err)
    }
  }


