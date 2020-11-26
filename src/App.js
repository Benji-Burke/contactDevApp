import Service from './components/Service.js'
import NavbarComponent from './components/Navbar/NavbarComponent.js';
import AboutUs from './components/AboutUs.js';
import logo from './Infinity-Arrow.svg';
import './App.css';
import './Contact.css';
import FirebaseContact from './components/FirebaseContact.js';
// import ContactForm from './components/ContactForm.js';



function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Headliner">Hi, we are DevApp Agency, a digital agency for your technological needs and dreams.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
      <Service/>
      <AboutUs/>
      <FirebaseContact/>
    </div>
  );
}

export default App;
