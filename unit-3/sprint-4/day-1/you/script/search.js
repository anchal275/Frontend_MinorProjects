import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()





import { getdata , displaydata } from "../components/fetch.js"


let input = document.querySelector("#searchMeal")
input.addEventListener("input", main)

async function main(){
    let query = document.querySelector("#searchMeal").value;
    console.log(query)
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    let container = document.querySelector("#container")
    let data = await getdata(url)
    console.log(data.meals)
    displaydata(data.meals,container)
}

let userfromLs=localStorage.getItem("login")
if(userfromLs!==null){
    let h3 = document.createElement("h3")
    h3.innerText=`Welcome ${userfromLs}`
    document.querySelector("#navbar").append(h3)
}








































