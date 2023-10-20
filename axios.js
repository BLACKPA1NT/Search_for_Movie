const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDcyODcyNTEzZDIxZWIwMWQwZjk3MWJlMjc3ZDI0NyIsInN1YiI6IjY1MmYzY2FlMDI0ZWM4MDBhZWNkYzY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzzoQMlGgVCHK84-QzWPEQeYDt2kLHmdId_XaTaIbHU'
    }
};


const key = 'b072872513d21eb01d0f971be277d247';

const fetchMovie = async () => {
    const url = "https://api.themoviedb.org/3/trending/all/week?api_key=" + key + "&language=ko-KR"
    const response = await axios.get(url);
    for (let i = 0; i < 10; i++) {
        if (response.data.results[i].title == undefined) {
            console.log(response.data.results[i].name)
        }
        else {
            console.log(response.data.results[i].title)
        }
    }
}