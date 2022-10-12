 import { navbar } from "../components/navbar.js";
 document.querySelector("#navbar").innerHTML = navbar()

 import { getdata , displaydata } from "../components/fetch.js"

 

const url = "https://www.themealdb.com/api/json/v1/1/random.php"
let container = document.querySelector("#container")

getdata(url).then((res)=>{
    console.log(res)
    displaydata(res.meals,container)
})

let userfromLs=localStorage.getItem("login")
if(userfromLs!==null){
    let h3 = document.createElement("h3")
    h3.innerText=`Welcome ${userfromLs}`
    document.querySelector("#navbar").append(h3)
}
