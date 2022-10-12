let imagearr = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9947/1279947-h-d5d3ff34dad1",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8104/1118104-h-47b8678a27ba",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/24/1280024-h-aa8dc3cc21b6",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h",
];

function slideshow() {
  let container = document.querySelector("#slideshow");
  let i = 0;
  setInterval(function () {
    if (i == imagearr.length) {
      i = 0;
    }
    let img = document.createElement("img");
    img.setAttribute("src", imagearr[i]);
    container.innerHTML = "";
    container.append(img);
    i++;
  }, 1000);
}
slideshow();

let moviesarr = [
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 6,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 7,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 10,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 9,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster:
      "https://www.imdb.com/title/tt9419884/mediaviewer/rm339811841/?ref_=tt_ov_i",
    IMDbRating: 4,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 5,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 7,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 6,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "6 May 2022",
    poster: "https://images.thedirect.com/media/photos/doctor-poster-1.jpg",
    IMDbRating: 5,
  },
];
display(moviesarr);
function display(moviesarr) {
  document.querySelector("#movies").innerHTML = "";
  moviesarr.map(function (elem) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.poster);

    let name = document.createElement("h1");
    name.innerText = elem.name;

    let releaseDate = document.createElement("h2");
    releaseDate.innerText = elem.releaseDate;

    let imdb = document.createElement("h4");
    imdb.innerText = elem.IMDbRating;

    div.append(image, name, releaseDate, imdb);

    document.querySelector("#movies").append(div);
  });
}

document.querySelector("#sort-lh").addEventListener("click", lowtohigh);

function lowtohigh() {
  moviesarr.sort(function (a, b) {
    return a.IMDbRating - b.IMDbRating;
  });
  display(moviesarr);
}
document.querySelector("#sort-hl").addEventListener("click", hightolow);
function hightolow() {
  moviesarr.sort(function (a, b) {
    return b.IMDbRating - a.IMDbRating;
  });
  display(moviesarr);
}
