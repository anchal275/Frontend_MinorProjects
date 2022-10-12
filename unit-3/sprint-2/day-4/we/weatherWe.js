




async  function getCity(){
   let city = document.querySelector("#city").value
   let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fce78fb87e17e1b54cf6accb57217e0`
  
    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        showdata(data)
    }
    catch(err){
    console.log(err)
    }
}


function showdata(data){
    document.querySelector("#result").innerHTML=""
    let name = document.createElement("h2")
    name.innerText=data.name

    let Temp = document.createElement("h2")
    Temp.innerText=`Temprature: ${data.main.temp}`

    let TempMin = document.createElement("h2")
    TempMin.innerText=` Min Temprature: ${data.main.temp_min}`

    let TempMax = document.createElement("h2")
    TempMax.innerText=` Max Temprature: ${data.main.temp_max}`

    let map = document.querySelector("#gmap_canvas")
    map.src= `https://maps.google.com/maps?q=${data.name}&t=k&z=13&ie=UTF8&iwloc=&output=embed`

    document.querySelector("#result").append(name,Temp,TempMin,TempMax)

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
        showdata(data)
    }
    catch(err){
    console.log(err)
    }
  }



  











