let getdata = async (url)=>{
    try{
      let res = await fetch(url)
      let data = await res.json()
      return data;
    }
    catch(err){
      return err
    }
  }

  let append = (data,container)=>{
    data.map(({image,title,price})=>{
      let div = document.createElement("div")
      let images = document.createElement("img")
      images.setAttribute("src",image)
      let titles = document.createElement("h1")
      titles.innerText=title
      let prices = document.createElement("h2")
      prices.innerText = price
   
      div.append(images,titles,prices)
      container.append(div)
   
    })
   }

  export {getdata,append} 