import "./App.scss";
import About from "./components/about/About";
import Reviews from "./components/avis/Reviews";
import Categories from "./components/categories/Categories";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/navigation/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Categories />
      <Portfolio />
      {/* <Produits /> */}
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
