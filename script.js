document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = 'd17718351ed5d92e52d789525167d370'
let url_base= 'https://api.themoviedb.org/3/search/movie'
let url_img= 'https://image.tmdb.org/t/p/w500'

let container= document.getElementById('results')
    container.innerHTML= ''

function searchMovies(){
    container.innerHTML= 'Cargando...'
    let searchInput= document.getElementById('searchInput').value 
    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then(response=>response.json())
    .then(response=>displayMovies(response.results))


}

function displayMovies(movies){
    container.innerHTML= ''
    if (movies.length===0){
        container.innerHTML= '<p> No se ha encontrado ninguna pelicula </p>'
        return 
    }
    
    movies.forEach(movie => {
        let movieDiv= document.createElement('div')
        movieDiv.classList.add('movie')

        let title= document.createElement('h1')
        title.textContent = movie.title

        let resena = document.createElement('p')
        resena.textContent= movie.overview

        let poster_path= url_img + movie.poster_path
        let poster= document.createElement('img')
        poster.src= poster_path


        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(resena)

        container.appendChild(movieDiv)
    });

    
}