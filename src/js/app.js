//import axios from "axios";

//const data = `${url}wp-json/wp/v2/pages`;

import Footer from "./partials/footer.js";
import Header from "./partials/Header.js";
////views
import Home from "./views/Home.js";
////assets
import SVG from "./widgets/Svg.js";

///////////
import "../css/app.scss";

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
  };

  static contextTypes = {
    content: PropTypes.object,
    location: PropTypes.object,
    closeAllDropdowns: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      nav: false,
      modal: false
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header logo={SVG.logo} {...this.props} />
        <Home />
        <Footer />
      </div>
    );
  }
}
export default App;
