
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="searchbar">
        <input type="text" name="search" placeholder="Search.."></input> <button id="searchbutton">Search</button>
      </div>
    )
  }
}

window.Search = Search;