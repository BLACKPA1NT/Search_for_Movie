const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDcyODcyNTEzZDIxZWIwMWQwZjk3MWJlMjc3ZDI0NyIsInN1YiI6IjY1MmYzY2FlMDI0ZWM4MDBhZWNkYzY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzzoQMlGgVCHK84-QzWPEQeYDt2kLHmdId_XaTaIbHU'
    }
};


const search_form = document.querySelector('#search_form')
search_form.addEventListener('submit', function (event) {
    event.preventDefault()
    fetchMovies(event.target[0].value);
})

function fetchMovies(keyword = '') {
    fetch(
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
        options,
    )
        .then((response) => response.json())
        .then((data) => {
            const movies = data.results;
            console.log(movies);
            const movieContainer = document.getElementById("movie-container");
            movieContainer.innerHTML = '';
            movies
                .filter((value) => value.title.includes(keyword))
                .forEach((movie) => {
                    const movieHtml = `
            <div class='card' onclick='getMovieId(${movie.id})'>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                <h2>${movie.title}</h2>
                <p class = 'overview'>${movie.overview}</p>
    
                <p class = 'vote'>평균 평점: ${movie.vote_average}</p>
            </div>`;
                    const movieContainer = document.getElementById("movie-container");
                    movieContainer.innerHTML += movieHtml;
                });
        })
        .catch((err) => console.error(err));
}

fetchMovies();

function getMovieId(movieId) {
    alert(`영화 ID : ${movieId}`);
}


