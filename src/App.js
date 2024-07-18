import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route exact path='/portfolio/' element={<Portfolio />} />
              <Route exact path='/skills/' element={<Skills />} />
              <Route exact path='/contact/' element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
