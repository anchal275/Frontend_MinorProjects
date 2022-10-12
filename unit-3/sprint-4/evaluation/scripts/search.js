// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { getdata,appenddata } from "../components/fetch.js";
import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

let datafromLs = JSON.parse(localStorage.getItem("searchedtext"))
datafromLs.map((el)=>{
   let query = el 
   const url = `https://masai-api.herokuapp.com/news?q=${query}`
   getdata(url).then((data)=>{
    console.log(data)
    let container = document.querySelector("#results")
    appenddata(data.articles,container)
   })
})

let search = (e)=>{
    if(e.key == "Enter"){
        let query = document.querySelector("#search_input").value
        const url = `https://masai-api.herokuapp.com/news?q=${query}`
        getdata(url).then((data)=>{
            console.log(data)
            let container = document.querySelector("#results")
            container.innerHTML=null
            appenddata(data.articles,container)
           })
    }
}

document.querySelector("#search_input").addEventListener("keydown",search)



