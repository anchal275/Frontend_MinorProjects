// async function getdata(){
//     try{
//         let res = await fetch(url)
//         let data = await res.json()
//         console.log(data.items)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// getdata()

// By arrow Function--------------------------------------------------------------------------------------
// AIzaSyB2F4PN6in_Onw-MDkN_5M_G4gpTngOwiI
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyDz9qtHoF-fYjZb0wH3A4ZoP491DHYHeCI
let getdata = async () =>{
    let query = document.querySelector("#search").value
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDz9qtHoF-fYjZb0wH3A4ZoP491DHYHeCI`
    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.items)
        append(data.items)
    }
    catch(err){
        console.log(err)
    }
}



let append = (data) =>{
    document.querySelector("#container").innerText=""
   data.forEach(elem => {
    let div = document.createElement("div")
   
    let image = document.createElement("img")
    image.setAttribute("src", elem.snippet.thumbnails.medium.url)

    let h2 = document.createElement("h2")
    h2.innerText = elem.snippet.title
    div.append(image,h2)
    document.querySelector("#container").append(div)
   })
}

