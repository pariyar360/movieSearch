const moviesEl = document.querySelector(".movies")
const movieListEl = document.querySelector(".movies__list")

async function querySubmit() {
    let query = document.getElementById("query").value;
    console.log(query)
    renderMovies(query)
}

async function renderMovies(query) {
    const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e792d444&s=${query}`)
    const queryData = await movies.json()
    const moviesData = queryData["Search"]
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie))
}


function movieHTML(movie) {
    return `<div class="movie">
                <img src="${movie.Poster}"/>
                <h3 class="movie__title">${movie.Title}</h3>
                <p class="movie__year">${movie.Year}</p>
            </div>`
}
