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

  dataFetch = async () => {
    const { query } = this.state;
    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&entity=album`
    );
    const resJson = await res.json();
    this.setState({ data: resJson.results });
  };

  renderAlbums() {
    const { data } = this.state;
    return data.map(item => {
      return (
        <div className="album" key={item.collectionId}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${item.artworkUrl100})`
            }}
          >
            <img
              src={item.artworkUrl100}
              alt={item.collectionName}
              draggable={false}
              style={{ display: "none" }}
            />
          </div>
          <div className="album--title">{item.collectionName}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="home">
        <div className="search--container">
          <div className="search--field">
            <input
              placeholder="Search for..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
            <button onClick={() => this.dataFetch()}>search</button>
          </div>
        </div>
        <div className="albums" id="albums-container">
          {this.renderAlbums()}
        </div>
      </div>
    );
  }
}
