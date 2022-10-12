document.querySelector("form").addEventListener("submit",storeformdata)
let dataarr =JSON.parse(localStorage.getItem("data")) || []
function data(n,c,e,p){
    this.name=n
    this.contact=c
    this.email=e
    this.password=p
}

function storeformdata(event){
    event.preventDefault()
    let name = document.querySelector("#name").value
    let contact = document.querySelector("#contact").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
     
    if(name == "" || contact=="" || email=="" || password==""){
        alert("please Fill all Details")
    }else{
        let s1 = new data(name,contact,email,password)
        dataarr.push(s1)
        localStorage.setItem("data",JSON.stringify(dataarr))
        window.location.href="login.html"
    }
}