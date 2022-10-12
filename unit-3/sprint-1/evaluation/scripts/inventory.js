let datafromLS = JSON.parse(localStorage.getItem("data")) || []

datafromLS.map(function(elem,index){
    let div = document.createElement("div")


    let image = document.createElement("img")
    image.setAttribute("src",elem.image)

    let brand = document.createElement("h1")
    brand.innerText= elem.brand

    let name = document.createElement("h1")
    name.innerText = elem.name

    let price = document.createElement("h2")
    price.innerText = elem.price

    let removeButton = document.createElement("button")
    removeButton.innerText = "Remove Product"
    removeButton.id="remove_product"
    removeButton.addEventListener("click",function(){
        del(elem,index)
    })
    div.append(image,brand,name,price,removeButton)
    document.querySelector("#products_data").append(div)
   
})

function del(elem,index){
    datafromLS.splice(index,1)
    localStorage.setItem("data", JSON.stringify(datafromLS))
    window.location.reload()
}