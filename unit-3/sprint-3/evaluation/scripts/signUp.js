document.querySelector("#sign_up").addEventListener("click",storedata)
let arr = []
function storedata(){
    let obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("user",JSON.stringify(arr))
}