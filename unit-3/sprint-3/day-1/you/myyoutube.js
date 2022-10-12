// const api = AIzaSyDTw5imc0ZBcN4ARGmuHtWns38pw0r5dYk
let popular = async ()=>{
    let url1 = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyDTw5imc0ZBcN4ARGmuHtWns38pw0r5dYk"
    try{
        let res =  await fetch(url1)
        let data = await res.json()
        console.log(data.items)
        appendsearchdata(data.items)
    }
    catch(err){
        console.log(err)
    }
}
popular()























let getdata = async ()=>{
  let query = document.querySelector("#search").value
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDTw5imc0ZBcN4ARGmuHtWns38pw0r5dYk`

  try{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.items)
    appendsearchdata(data.items)

  }
  catch(err){
    console.log(err)
  }
}


let appendsearchdata =  (data)=>{
    document.querySelector("#box").innerHTML=""
data.map( elem =>{
    let div = document.createElement("div")
    div.addEventListener("click",function(){
        playvideo(elem)
    })
    let img = document.createElement("img")
    img.setAttribute("src", elem.snippet.thumbnails.high.url)
    let name = document.createElement("h1");
    name.innerText =elem.snippet.title;
    let channel=document.createElement("h2");
    channel.innerText=elem.snippet.channelTitle;
    div.append(img,name,channel)

    document.querySelector("#box").append(div)


})
}

let playvideo = (elem)=>{
    console.log(elem)
 localStorage.setItem("video", JSON.stringify(elem))
 window.location.href = "playvideo.html"

}

