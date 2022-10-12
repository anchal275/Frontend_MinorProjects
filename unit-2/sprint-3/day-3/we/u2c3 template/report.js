// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit",getdata)

function getdata(event){
    event.preventDefault()
    let images = document.querySelector("#image").value;
    let names = document.querySelector("#name").value;
    let batches = document.querySelector("#batch").value;
    let scoreD = document.querySelector("#dsa").value;
    let skillathon = document.querySelector("#cs").value;
    let scoreC = document.querySelector("#coding").value;


    let tablerow = document.createElement("tr")
    let td1 = document.createElement("td")
    let avatar = document.createElement("img")
    avatar.setAttribute("src","https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png")
    td1.append(avatar)
    let td2 = document.createElement("td")
    td2.innerText=names
    let td3 = document.createElement("td")
    td3.innerText = batches
    let td4 = document.createElement("td")
    td4.innerText=scoreD
    let td5 = document.createElement("td")
    td5.innerText=skillathon
    let td6 = document.createElement("td")
    td6.innerText=scoreC
    let td7 = document.createElement("td")
    let x = Number(scoreD)+Number(skillathon)+Number(scoreC)
    let y = 30
    let percentage = (x/y)*100
    td7.innerText = percentage.toFixed(3)
    let td8 = document.createElement("td")
    if(percentage>50){
        td8.innerText = "Regular"
        td8.style.backgroundColor ="green"
    }else{
        td8.innerText = "Async"
        td8.style.backgroundColor ="red"
    }
    let td9 = document.createElement("td")
        td9.innerText = "Delete"
        td9.style.backgroundColor ="red"
    
     td9.addEventListener("click",deletes)
     function deletes(event){
     event.target.parentNode.remove();
     }
    tablerow.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tablerow)



}


