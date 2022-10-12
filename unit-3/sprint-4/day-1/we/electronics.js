import {navbar} from "./components/navbar.js"

document.querySelector("#navbar").innerHTML = navbar()




import {getdata,append} from "./components/fetch.js"
const url = "https://fakestoreapi.com/products/category/electronics"
let container = document.querySelector("#container")
getdata(url).then((res)=>{
    console.log(res)
    append(res,container)
})
