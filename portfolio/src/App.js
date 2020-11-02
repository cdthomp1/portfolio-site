import Home from "./screens/Home.js"
import Contact from "./screens/Contact.js"
import Footer from './components/Footer.js'
import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/contact' component={Contact} />
      <Route path='/' component={Home} exact />
      <Footer />
    </Router>
  );
}

export default App;
