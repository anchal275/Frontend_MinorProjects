import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()

import { getdata } from "../components/fetch.js"


let button = document.querySelector("#cat")
button.addEventListener("click", main)


async function main(){
    let query = document.querySelector("#searchCat").value;
    console.log(query)
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
   
    let data = await getdata(url)
    console.log(data)
    append(data.meals)
    
}


function append(data){
    document.querySelector("#box").innerHTML = ""
    data.map(({strMealThumb,strMeal,strYoutube})=>{
      let div = document.createElement("div")

    let image = document.createElement("img")
    image.setAttribute("src",strMealThumb)

    let name = document.createElement("h1")
    name.innerText = strMeal

    let video = document.createElement("a")
    video.href = strYoutube
    video.innerText =`Watch on Youtube`

    div.append(image,name,video)
    document.querySelector("#box").append(div)
    })
 }


 
let userfromLs=localStorage.getItem("login")
if(userfromLs!==null){
    let h3 = document.createElement("h3")
    h3.innerText=`Welcome ${userfromLs}`
    document.querySelector("#navbar").append(h3)
}


