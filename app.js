const hidden = document.querySelector(".hidden")
const movieListEl = document.querySelector(".movies__list")
const query = localStorage.getItem("query")

if (query) {
    renderMovies(query)
    localStorage.removeItem("query")
}

async function querySubmit() {
    const query = document.getElementById("query").value;
    renderMovies(query)
}

async function renderMovies(query) {
    hidden.classList.remove("hidden")
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e792d444&s=${query}`)
    const queryData = await movies.json()
    const moviesData = queryData["Search"]
    if (!moviesData) {
        movieListEl.innerHTML = `<h2>Movie not in database</h2>`
    }
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("")
}

function movieHTML(movie) {
    return `<div class="movie">
                <img src="${movie.Poster}"/>
                <h3 class="movie__title">${movie.Title}</h3>
                <p class="movie__year">${movie.Year}</p>
            </div>`
}