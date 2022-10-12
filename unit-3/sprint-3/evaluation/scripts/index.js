let checkoutarr = []
let runScript = async (e)=>{
    if (e.keyCode == 13) {
        let query = document.querySelector("#query").value
        let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
        
        try{
            let res =  await fetch(url)
            let data = await res.json()
            console.log(data.hotels)
            append(data.hotels)
            
        }
        catch(err){
            console.log(err)
        }
      }
}


let append = (data)=>{
    document.querySelector("#hotels-list").innerHTML=""
    data.map( elem =>{
        let div = document.createElement("div")
        div.id="hotel"
        let images = document.createElement("img")
        images.setAttribute("src", elem.Images.one)

        let title = document.createElement("h1");
        title.innerText =elem.Title;

        let  price =document.createElement("h2");
        price.innerText = elem.Price;

        

        let rating = document.createElement("h3");
        rating.innerText = elem.Rating

        let acornot = document.createElement("h4")
        if(elem.Ac== true){
            acornot.innerText="Ac"
        }else{
            acornot.innerText=" Non Ac"
        }

        let btn = document.createElement("button")
        btn.id= "book"
        btn.innerText="Book Now"
        btn.addEventListener("click", function(){
            checkout(elem)
        })


    div.append(images,title,price,rating,acornot,btn)
    
        document.querySelector("#hotels-list").append(div)
    })
}

document.querySelector("#sort_lth").addEventListener("click", ltoh)
function ltoh(){
Array.sort((a,b)=>{
    return a.Price - b.Price
})

}

function checkout(elem){
  checkoutarr.push(elem)
  localStorage.setItem("ckeckout",JSON.stringify(checkoutarr))
  window.location.href="checkout.html"
}





