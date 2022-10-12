// Ude Import export (MANDATORY)



import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();



let arr = JSON.parse(localStorage.getItem("searchedtext"))
function search(e){
    if(e.key == "Enter"){
        window.location.href="./search.html"
        arr.push(document.querySelector("#search_input").value)
        localStorage.setItem("searchedtext", JSON.stringify(arr))
    }
}

document.querySelector("#search_input").addEventListener("keydown",search)

let newsarrfromLs = JSON.parse(localStorage.getItem("news"))
console.log(newsarrfromLs)
let detail = document.querySelector("#detailed_news")
newsarrfromLs.map(({urlToImage,title,content})=>{
   let image = document.createElement("img")
   image.setAttribute("src",urlToImage)

   let titles = document.createElement("h3")
   titles.innerText = title

   let contents = document.createElement("p")
   contents.innerText = content;

   detail.append(image,titles,contents)

})


