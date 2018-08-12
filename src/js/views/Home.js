//import axios from "axios";
//const data = `https://itunes.apple.com/search?term=jay-z`;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: []
    };
  }

  componentDidMount() {
    this.dataFetch();
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  dataFetch = () => {
    const { query } = this.state;
    fetch(`https://itunes.apple.com/search?term=${query}&entity=album`)
      .then(res => res.json())
      .then(data => this.setState({ data: data.results }));
  };

  renderAlbums() {
    const { data } = this.state;
    return data.map(item => {
      return (
        <div className="album" key={item.collectionId}>
          <div className="album--title">{item.collectionName}</div>
          <img
            src={item.artworkUrl100}
            alt={item.collectionName}
            draggable={false}
          />
        </div>
      );
    });
  }

  render() {
    console.log("state", this.state.query);
    return (
      <div className="home">
        <h1>HOME PAGE</h1>
        <div className="search--field">
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <button onClick={() => this.dataFetch()}>search</button>
        </div>
        {this.renderAlbums()}
      </div>
    );
  }
}
