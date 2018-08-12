import Navigation from "./Navigation.js";

export default class Header extends React.Component {
  static propTypes = {
    logo: PropTypes.any,
    mobileNavOpen: PropTypes.bool,
    modal: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="logo">
          <span>{this.props.logo}</span>
        </div>
        {this.props.open === true ? (
          <MobileNav mobileNavOpen={this.props.open} />
        ) : (
          <Navigation />
        )}
      </header>
    );
  }
}
