let arr =  JSON.parse(localStorage.getItem("Arr")) || []
display(arr)
document.querySelector("form").addEventListener("submit",revisionApp);
function revisionApp(event){
event.preventDefault()
let obj ={
   Title: document.querySelector("#title").value,
   Link: document.querySelector("#link").value,
   Difficulty: document.querySelector("#difficulty").value,
   
}
arr.push(obj)
display(arr)
localStorage.setItem("Arr", JSON.stringify(arr))
}

function display(arr){
    document.querySelector("tbody").innerHTML=""
    arr.map(function (elm){
        let row = document.createElement("tr")
    
        let td1 = document.createElement("td")
        td1.innerText=elm.Title
        let td2 = document.createElement("td")
        td2.innerText=elm.Link
        let td3 = document.createElement("td")
        td3.innerText=elm.Difficulty
        let td4 = document.createElement("td")
        if(elm.Difficulty=="Hard" || elm.Difficulty== "Medium"){
            td4.innerText="Yes"
        }else{
            td4.innerText="No"
        }
        row.append(td1,td2,td3,td4)
        document.querySelector("tbody").append(row)
        })
}



