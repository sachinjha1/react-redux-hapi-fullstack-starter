class MoviesApi {
  constructor(data) {
    this.movies = data.movies;
  }

  getMovies() {
    return this.movies;
  }
}

export default MoviesApi;
