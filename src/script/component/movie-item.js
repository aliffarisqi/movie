class MovieItem extends HTMLElement{
    set movie(movie){
        this._movie = movie;
        this.render();
    }
    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){ 
        return this.querySelector("#valDes").value;
    }
    render(){
        this.innerHTML = ` 
        <div class="movie-info"> 
             <h2>  ${this._movie.Title}  </h2> 
             <hr>
             <div class="more-info">
                <div class="litle-info">
                    <h4>Type :   ${this._movie.Type}  </h4> 
                    <p>Tahun, ${this._movie.Year}  </p>
                </div>   
                <div class="description-info">
                    <input  id="valDes" type="hidden" value="${this._movie.imdbID}">
                    <button id="getDes" type="submit">Get More Info</button>
                </div>
             </div>
        </div>
        <div class="movie-desArt">
            <img class="fan-art-movie" src="${this._movie.Poster}" alt="Fan Art"> 
        </div>
        `
        this.querySelector("#getDes").addEventListener("click", this._clickEvent);
    }
}
customElements.define("movie-item",MovieItem );
