import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()

let userarr = JSON.parse(localStorage.getItem("user")) || []
document.querySelector("form").addEventListener("submit",store)

function store(event){
    event.preventDefault()
    let obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }
    if(obj.name == "" || obj.email==""  || obj.password == ""){
      alert("Please Fill All Details")
    }else{
      if(check(obj.email)==true){
        userarr.push(obj)
        console.log(userarr)
        localStorage.setItem("user",JSON.stringify(userarr))  
        window.location.href="./login.html"
        }else{
            alert("Email already🥲ragister")
        }
    }

  
}
function check(email){
    let filter=userarr.filter(function(elem){
        return email==elem.email
        })
        if(filter.length>0){
          return false
  
        }else{
          return true
        }
}