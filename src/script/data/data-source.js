 class DataSource {
    static searchMovie(keyword){
        return fetch(`http://www.omdbapi.com/?apikey=4e9a0e25&s=${keyword}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`${keyword} is not here, check again`);
            }
        })
    }
    static getDescription(keyword){
        return fetch(`http://www.omdbapi.com/?apikey=4e9a0e25&i=${keyword}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`${keyword} is not here, check again`);
            }
        })

    }
}

export default DataSource;