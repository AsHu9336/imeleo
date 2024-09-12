
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Founder from './Components/Founder';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Solutions from './Components/Solutions';
import WhyContactUs from './Components/WhyContactUs';
import About from './Components/About'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Solutions/>
    <Services/>
    <About/>
    <Founder/>
    <WhyContactUs/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default App;
