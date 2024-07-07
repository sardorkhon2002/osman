import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <AboutUs />
      {/*<Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
