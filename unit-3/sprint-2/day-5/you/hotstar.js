async function main(){
    let data = await getdata()
    console.log(data)
    displaydata(data)
}


async function getdata(){
    let movie = document.querySelector("#movie").value
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
   div.addEventListener("click",function(){
   showmoviedata(elem)
   })

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


function showmoviedata(elem){
   
    let img = document.createElement("img")
    img.setAttribute("src",elem.Poster)
    let name = document.createElement("h1")
    name.innerText=elem.Title
    let year = document.createElement("h1")
    year.innerText=elem.Year
    document.querySelector("#showdata").append(img,name,year)
}