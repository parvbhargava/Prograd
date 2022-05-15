var apikey = "c5bd38c9154e8cb1d26b5e841d4f68c4";
let trailers = [];
let cat = "now_playing";
let lang = "en";

function _(id) {
  return document.querySelector(id);
}

function getMovies(category, language) {
  trailers = [];
  const myNode = _(".main");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  fetch(
    `https://api.themoviedb.org/3/movie/${
      category == "" ? cat : category
    }?api_key=${apikey}&with_original_language=${
      language == "" ? lang : language
    }&page=1`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cat = category == "" ? cat : category;
      lang = language == "" ? lang : language;
      if (data.results.length == 0) {
        let noMovies = document.createElement("p");
        noMovies.classList.add("noMovies");
        noMovies.textContent = "No upcoming movies";
        _(".main").append(noMovies);
      } else {
        for (let i = 0; i < data.results.length; i++) {
          trailers.push(data.results[i].id);
          let template = document.createElement("div");
          template.classList.add("template");
          let br = document.createElement("br");
          let h2 = document.createElement("h2");
          h2.textContent = data.results[i].title;
          let h4 = document.createElement("h4");
          h4.textContent = data.results[i].release_date;
          h4.style.opacity = 0.5;
          let img = document.createElement("img");
          img.src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
          img.setAttribute("onclick", `openTrailer(${i})`);
          let low = document.createElement("div");
          low.classList.add("low");
          let heart = document.createElement("div");
          heart.classList.add("heart");
          let i1 = document.createElement("i");
          i1.classList.add("fas");
          i1.classList.add("fa-heart");
          let span = document.createElement("span");
          span.textContent = data.results[i].vote_count;
          heart.append(i1, span);
          let eye = document.createElement("div");
          eye.classList.add("eye");
          let i2 = document.createElement("i");
          i2.classList.add("fas");
          i2.classList.add("fa-eye");
          let span2 = document.createElement("span");
          span2.textContent = data.results[i].popularity;
          eye.append(i2, span2);
          low.append(heart, eye);
          template.append(br, h2, h4, img, low);
          _(".main").append(template);
        }
      }
    });
}

function closeTrailer() {
  _(".trailer").style.display = "none";
}

function openTrailer(id) {
  fetch(
    `https://api.themoviedb.org/3/movie/${trailers[id]}/videos?api_key=2618a4ce773c01d44febc6087c180ad6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.results.length == 0) {
        alert("No Trailer found!!");
      } else {
        _(
          "#trailer"
        ).src = `https://www.youtube.com/embed/${data.results[0].key}`;
        _(".trailer").style.display = "block";
      }
    });
}

getMovies("now_playing", "en"); 
 