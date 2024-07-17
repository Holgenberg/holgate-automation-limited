import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
