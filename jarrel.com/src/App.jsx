import './App.css';
import About from './assets/About';
import Articles from './assets/Articles';
import Contact from './assets/Contact';
import Footer from './assets/Footer'; // Import Footer section
import Hero from './assets/Hero';
import Navbar from './assets/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Articles />
      <Contact />
      <Footer /> {/* Footer appears last */}
    </>
  );
}

export default App;
