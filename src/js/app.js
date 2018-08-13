import Footer from "./partials/footer.js";
import Header from "./partials/Header.js";
////views
import Home from "./views/Home.js";
////assets
import SVG from "./widgets/Svg.js";
///////////
import "../css/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
export default App;
