let url = "https://grocery-masai.herokuapp.com/items"
 let i=0;

 fetch(url).then(function (res){
     return res.json()
 }).then(function(res){
     append(res)
     console.log(res)
 }).catch(function(err){
     console.log("err:",err)
 })

 function append(ele){

    let apiData = ele.data;

    for(let i=0;i<apiData.length;i++){

        let div = document.createElement("div");

          let image = document.createElement("img")
            image.src= ele.data[i].image

            let name= document.createElement("p")
              name.innerText=ele.data[i].name


            let price= document.createElement("p")
            price.innerText=ele.data[i].price

            let btn= document.createElement("button")
         
              btn.innerText= "Add to Cart"
              btn.addEventListener("click",function(){
                  addToCArt(ele.data[i])
              })
            div.append(image,name,price,btn)
            document.querySelector("#groceries").append(div)
    }

    let cartArr= JSON.parse(localStorage.getItem("cart_items"))  || []
     function addToCArt(data){
        let wallet = document.querySelector("#wallet")
        if(wallet.innerText<=0){
            alert("Insufficient balance")
          
        }   wallet.innerText= wallet.innerText-data.price
        
         cartArr.push(data)
         localStorage.setItem("cart_items",JSON.stringify(cartArr))


     }
    }


