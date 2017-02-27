
// App will 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: window.exampleMovieData
    }
  }

  render() {
    console.log(this.state);
    // test:
    return (
      <div>
        <Search />
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

window.App = App;