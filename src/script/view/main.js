import '../component/movie-list.js';
import '../component/content-element.js';
import DataSource from "../data/data-source.js";
 const main = ()=>{
     const searchElement = document.querySelector("content-element");
     const movieListElement = document.querySelector("movie-list");
      //pencarian film
     const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
     const renderResult = results=>{
        movieListElement.movies = results;
     };
     const fallbackResult =message=>{
        movieListElement.renderError(message);
     };

     //menampilkan info film lebih banyak
   //   const onButtonGetDescription = () =>{
   //      DataSource.getDescription(clickEvent.value)
   //      .then(renderGetDescription)
   //      .catch(fallbackGetDescription)
   //   }
   //   const renderGetDescription = results=>{
   //    movieListElement.infoMore = results;
   //    };
   //    const fallbackGetDescription =message=>{
   //    movieListElement.renderError(message);
   //    };
   // clickEvent=onButtonGetDescription;
   searchElement.clickEvent=onButtonSearchClicked;
 }

 export default main;