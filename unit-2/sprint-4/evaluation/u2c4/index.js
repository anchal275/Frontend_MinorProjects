// All the JS Code for the Add Students Page Goes Here
document.querySelector("#form").addEventListener("submit",storedata)
let userarr =  JSON.parse(localStorage.getItem("admission")) || []

function storedata(event){
    event.preventDefault()
    let obj= {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        gender: document.querySelector("#gender").value,
        course: document.querySelector("#course").value
    }
    userarr.push(obj)
    // ----------------console.log(userarr)
    localStorage.setItem("admission",JSON.stringify(userarr))
}
