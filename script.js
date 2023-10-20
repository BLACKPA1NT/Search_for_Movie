// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDcyODcyNTEzZDIxZWIwMWQwZjk3MWJlMjc3ZDI0NyIsInN1YiI6IjY1MmYzY2FlMDI0ZWM4MDBhZWNkYzY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzzoQMlGgVCHK84-QzWPEQeYDt2kLHmdId_XaTaIbHU'
//     }
// };

// const key = 'b072872513d21eb01d0f971be277d247';

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



function search() {
    alert('연결완료')
}


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDcyODcyNTEzZDIxZWIwMWQwZjk3MWJlMjc3ZDI0NyIsInN1YiI6IjY1MmYzY2FlMDI0ZWM4MDBhZWNkYzY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzzoQMlGgVCHK84-QzWPEQeYDt2kLHmdId_XaTaIbHU'
    }
};

const key = 'b072872513d21eb01d0f971be277d247';

fetch('https://api.themoviedb.org/3/movie/popular?api_key=b072872513d21eb01d0f971be277d247&language=ko-KR', options)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        // const movieInfor = document.getElementById('move-infor');
        // const movieVote = document.getElementById('move-vote');
        const movieContainer = document.getElementById('movie-container');



        movies.forEach(movie => {
            // movieInfor.textContent = movie.title;
            // const movieHtml = `<div>${movie.title}</div>`
            const movieHtml = `
            <div class='card' onclick='getMovieId(${movie.id})'>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                <h2>${movie.title}</h2>
                <p class = 'overview'>${movie.overview}</p>
                
                <p class = 'vote'>평균 평점: ${movie.vote_average}</p>
            </div>`;

            const movieContainer = document.getElementById('movie-container');
            movieContainer.innerHTML += movieHtml;
            // movieVote.textContent = movie.vote_average;
            // // console.log(movie.title);
            // console.log(moviehtml);
            // console.log(movie.overview);
            // console.log(movie.poster_path);
            // console.log(movie.vote_average);
        });

    })
    .catch(err => console.error(err));

function getMovieId(movieId) {
    alert(`영화 ID : ${movieId}`);
}




