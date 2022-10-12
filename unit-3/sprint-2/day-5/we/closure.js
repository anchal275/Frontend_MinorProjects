async function main(){
    let movie = document.querySelector("#movie").value
    let data = await getdata(movie)
    displaydata(data)
}
async function getdata(movie){
   
    let url =  `http://www.omdbapi.com/?apikey=a9c51f99&s=${movie}`
    try{
    let res = await fetch(url)
    let data = await res.json()
    return data.Search
    }
    catch(err){
        console.log(err)
    }
}


function displaydata(data){
    if(!data){
        return
    }
    document.querySelector("#display").innerHTML=""
   data.map(function(elem){
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src",elem.Poster)
    let name = document.createElement("p")
    name.innerText=elem.Title

    div.append(img,name)
    document.querySelector("#display").append(div)
   })
}

let id;

  function debounce(func, delay) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      func();
    }, delay);
}