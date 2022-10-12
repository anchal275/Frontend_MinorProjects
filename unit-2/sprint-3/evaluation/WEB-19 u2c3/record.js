document.querySelector("form").addEventListener("submit",employeeRecords);
function employeeRecords(event){
    event.preventDefault()
    let Ename = document.querySelector("#name").value
    let Eid = document.querySelector("#employeeID").value
    let Edep = document.querySelector("#department").value
    let Eexp = document.querySelector("#exp").value
    let Eemail = document.querySelector("#email").value
    let Embl = document.querySelector("#mbl").value
    console.log(Ename,Eid,Edep,Eexp,Eemail,Embl)

    let row = document.createElement("tr")

    let td1 = document.createElement("td")
    td1.innerText=Ename
    let td2 = document.createElement("td")
    td2.innerText=Eid
    let td3 = document.createElement("td")
    td3.innerText=Edep
    let td4= document.createElement("td")
    td4.innerText=Eexp
    let td5 = document.createElement("td")
    td5.innerText=Eemail
    let td6 = document.createElement("td")
    td6.innerText=Embl
    let td7 = document.createElement("td")
    if(Eexp>5){
        td7.innerText="Senior"
    }else if (Eexp>=2 && Eexp<=5){
        td7.innerText="Junior"
    }else{
        td7.innerText="Fresher"
    }
    let td8 = document.createElement("td")
    td8.innerText="DELETE"
    td8.style.backgroundColor="red"

    td8.addEventListener("click", plsdelete)
    function plsdelete(event){
        event.target.parentNode.remove();
    }

    row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(row)
}