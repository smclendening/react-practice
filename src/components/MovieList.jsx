var MovieList = (props) => (
  // given movies,
  <div>
    {props.movies.map(movie => 
      <MovieListEntry movie={movie} key={movie.id} />
    )}
  </div>
)

window.MovieList = MovieList;

