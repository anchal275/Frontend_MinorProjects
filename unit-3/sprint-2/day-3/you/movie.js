const url = "https://www.omdbapi.com/?apikey=2e1a42b3&s=Avengers"
const searchBar = document.getElementById('search');
let container = document.getElementById("container");

let data=[]

// fetch(url)
// .then(function(res){
//     return res.json();
   
// })
// .then(function(res){
//     console.log(res.Search)
//     append(res.Search)
// })
// .catch(function(error){
//     console.log(error)
// })


// searchBar.addEventListener('keyup', (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filtered = data.Search.filter((character) => {
//       return (
//           character.Title.toLowerCase().includes(searchString) 
//       );
//   });
//   console.log(filtered)
//   append(filtered);
// });

searchBar.addEventListener("keyup",function(e){
   let searchtext = e.target.value.toLowerCase()
   let filtered= data.Search.filter(function(elem){
    return (elem.Title.toLowerCase().includes(searchtext))
   })
   append(filtered)
})

async function getData(){
  try{
    let res = await fetch(url)
    data = await res.json()
    append(data.Search)
    console.log(data.Search)
  }
  catch(err){
    console.log(err)
  }
}
getData()

function append(datas) {
  document.getElementById("container").innerHTML=""
  document.querySelector("#sort").addEventListener("change",sortyear)
function sortyear(datas){
  let selected = document.querySelector("sort").value;
  if(selected=="hl"){
    datas.sort(function(a,b){
      return a.Year - b.Year
    })
  }
    

}

      datas.map(function (el) {
        let img = document.createElement("img");
        img.src = el.Poster;

        let p = document.createElement("p");
        p.innerText = el.Title;
        let year = document.createElement("p")
        year.innerText=  el.Year

      //  let rating = document.createElement("p")
      //  rating.innerText= el.imdbID
        let div = document.createElement("div");
        div.append(img, p,year);
        container.append(div);
        
      });
    }


// document.querySelector("#sort").addEventListener("change",sortyear)
// function sortyear(data){
//   let selected = document.querySelector("sort").value;
//   if(selected=="hl"){
//     data.sort(function(a,b){
//       return a.Year - b.Year
//     })
//     append(data.Search)
//   }
    

// }







