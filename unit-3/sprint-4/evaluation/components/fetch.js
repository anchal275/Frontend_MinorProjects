let getdata = async(url)=>{
    try{
        let res = await fetch(url);
        let data = await res.json();

        return data
    }
    catch(err){
        console.log(err)
    }
}

let appenddata = (data,container)=>{
    container.innerHTML=null
    data.map((el)=>{
        let image = document.createElement("img")
        image.setAttribute("src",el.urlToImage)

        let title = document.createElement("h3")
        title.innerText = el.title

        let des = document.createElement("p")
        des.innerText = el.description

        let innerdiv = document.createElement("div")
        innerdiv.append(title,des)

        let div = document.createElement("div")
        div.append(image,innerdiv)
        div.setAttribute("class","news");
        div.addEventListener("click",function(){
            displayBox(el)
        })
        container.append(div);
    })
}

let newarr=[]
function displayBox(el){
    window.location.href="./news.html"
    newarr.push(el)
    localStorage.setItem("news",JSON.stringify(newarr))
}


export {getdata,appenddata}