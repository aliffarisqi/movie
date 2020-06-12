import './movie-item.js';

class MovieList extends HTMLElement{
    set movies(movies){
        this._movies = movies;
        this.render();
    }
    set infoMore(more){
        this.innerHTML = "Ok";
    }
    renderError(message){
       this.innerHTML = "";
       this.innerHTML +=`<h2 class="placeholder">${message}</h2>`
    }
    render(){
        this.innerHTML = "";
        this._movies.forEach(movie=>{
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }
}

customElements.define("movie-list",MovieList);