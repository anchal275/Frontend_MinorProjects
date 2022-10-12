async  function getdata(){
    let city = document.querySelector("#city").value

    let url= `api.openweathermap.org/data/2.5/forecast/daily?q=Indore&cnt=7&appid=0fce78fb87e17e1b54cf6accb57217e0`
    try{
       let res = await  fetch(url)
       let data = await res.json()
       console.log(data)
    //    displaydata(data)
    }
    catch(err){
        console.log(err)
    }
}