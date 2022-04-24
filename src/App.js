import './App.scss';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from './components/navigation/navigation.js';
import Footer from './components/footer/footer.js';

import Home from './components/pages/home.js';

function App() {

  WebFont.load({
    google: {
      families: ['Inter', 'Montserrat']
    }
  });

  return (
    <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>,
    </div>
  );
}

export default App;
