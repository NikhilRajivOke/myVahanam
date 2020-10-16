import React from 'react';
import Navibar from './Navbar';
import {Home} from './Pages/Home';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  return (
    <div>
    <Navibar></Navibar>
    <Home></Home>
    <Footer></Footer>
    </div>
  )
}

export default App;
