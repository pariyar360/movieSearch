
function sendQuery() {
    const query = document.getElementById("query").value;
    localStorage.setItem("query", query)
    window.location.href = "./movie.html"
}
