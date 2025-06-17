import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <div className='bod'>
        <Header />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
