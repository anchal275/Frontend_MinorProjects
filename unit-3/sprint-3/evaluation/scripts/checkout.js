let checkoutfromLs = JSON.parse(localStorage.getItem("ckeckout"))

checkoutfromLs.map(function(elem){
    let image = document.createElement("img")
    image.setAttribute("src",elem.Images.one)

    let title = document.createElement("h1");
     title.innerText =elem.Title;

    let  price =document.createElement("h2");
     price.innerText = elem.Price;
     document.querySelector("#hotel_details").append(image,title,price)
})

document.querySelector("#Book").addEventListener("click",booked)
function booked(){
    let user = document.querySelector("#user_name").value
    setInterval(function(){
      alert(`${user}, Your booking is successful!`)
    },5000)
}



