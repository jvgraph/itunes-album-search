export default class Header extends React.Component {
  static propTypes = {
    searchInput: PropTypes.object
  };
  static contextTypes = {
    data: PropTypes.array,
    handleInputChange: PropTypes.func,
    dataFetch: PropTypes.func
  };

  render() {
    const { handleInputChange, dataFetch } = this.context;
    return (
      <header>
        <h1>iTunes Album Search</h1>
      </header>
    );
  }
}
