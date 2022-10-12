//store the products array in localstorage as "data"
let dataarr= JSON.parse(localStorage.getItem("data")) || []
document.querySelector("#product_form").addEventListener("submit",storeData)

function nike(b,n,p,i){
    this.brand = b
    this.name = n
    this.price = p
    this.image =i
}

function storeData(event){
    event.preventDefault()
    let  brand = document.querySelector("#product_brand").value
    let  name = document.querySelector("#product_name").value
    let  price = document.querySelector("#product_price").value
    let  image = document.querySelector("#product_image").value

    let nikeproduct = new nike(brand,name,price,image)
    dataarr.push(nikeproduct)
    localStorage.setItem("data",JSON.stringify(dataarr))
}