var cartArr= JSON.parse(localStorage.getItem("cart_items")) 


let total = cartArr.reduce(function(sum,el,i,arr){
    return sum+Number(el.price)
},0)

document.querySelector("#cart_total").innerText=total;





function display(cartArr){
    cartArr.map(function(elem,index){
        let div = document.createElement("div");

        let image = document.createElement("img")
          image.src= elem.image

          let name= document.createElement("p")
            name.innerText=elem.name


          let price= document.createElement("p")
          price.innerText=elem.price
          let btn = document.createElement("button")
          btn.innerText= "Remove"
            btn.addEventListener("click",function(){
                removeitem(elem,index)
            })


          div.append(image,name,price,btn)

          document.querySelector("#cart").append(div)
    })
}
display(cartArr)


function  removeitem(elem,index){
    cartArr.splice(index,1)

    localStorage.setItem("cart_items",JSON.stringify(cartArr))
    window.location.reload()
   console.log("1")

  }
