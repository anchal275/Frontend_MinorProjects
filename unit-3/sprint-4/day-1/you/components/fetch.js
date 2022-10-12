let getdata = async (url)=>{
    try{
     let res = await fetch(url);
     let data = await res.json()
     return data
    }
    catch(err){
     return err
    }
 }


 function displaydata(data,container){
    container.innerHTML = ""
    data.map(({strMealThumb,strMeal,strArea,strInstructions,strYoutube})=>{
      let div = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    let image = document.createElement("img")
    image.setAttribute("src",strMealThumb)

    let name = document.createElement("h1")
    name.innerText = strMeal
     
    let area = document.createElement("h3")
    area.innerText = `Area: ${strArea}`

    let instructions = document.createElement("p")
    instructions.innerText = `Instructions : ${strInstructions}`

    let video = document.createElement("a")
    video.href = strYoutube
    video.innerText =`Watch on Youtube`

    div1.append(image)
    div2.append(name,area,instructions,video)
    div.append(div1,div2)
    container.append(div)
    })
 }

 export {getdata,displaydata}