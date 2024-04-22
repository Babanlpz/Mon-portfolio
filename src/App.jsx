import { useState } from "react";
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
  const [darkMode, setDarkMode] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleBackground = () => {
    setShowBackground(!showBackground);
  };

  return (
    <>
      <Nav toggleTheme={toggleTheme} />
      <Home toggleBackground={toggleBackground} />
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
