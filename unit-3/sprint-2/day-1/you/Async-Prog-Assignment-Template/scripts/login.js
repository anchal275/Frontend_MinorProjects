let datafromLS = JSON.parse(localStorage.getItem("data"))


document.querySelector("form").addEventListener("submit",login)

function login(event){
    event.preventDefault()
let email= document.querySelector("#email").value
let password = document.querySelector("#password").value

let datafromLS = JSON.parse(localStorage.getItem("data"))

 let filter = datafromLS.filter(function(elem){
    return email == elem.email && password == elem.password
 })

 if(filter.length>0){
  window.location.href="index.html"
}
else{
 alert("invalid Credentials")
}
}
