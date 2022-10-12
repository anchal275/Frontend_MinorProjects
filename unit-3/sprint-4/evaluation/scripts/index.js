// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { getdata,appenddata } from "../components/fetch.js";
import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();



const url = "https://masai-api.herokuapp.com/news/top-headlines?country=in"
getdata(url).then((data)=>{
    console.log(data)
    let container = document.querySelector("#results")
    container.innerHTML=null
    appenddata(data.articles,container)
})


//////search functionality


let searcharr=[]
let search = (e)=>{
 if(e.key=="Enter"){
    window.location.href="./search.html"
    searcharr.push(document.querySelector("#search_input").value)
    localStorage.setItem("searchedtext", JSON.stringify(searcharr))
 }
}
document.querySelector("#search_input").addEventListener("keydown",search)




///////countries functionalityyy


let countries = document.querySelector("#sidebar").children
console.log(countries);

function data(){
    console.log(this.id)
    const url = `https://masai-api.herokuapp.com/news/top-headlines?country=${this.id}`
    getdata(url).then((data)=>{
        let container = document.querySelector("#results")
        container.innerHTML=null
        appenddata(data.articles,container)
    })
  
}


for(let el of countries){
    el.addEventListener("click", data)
}
