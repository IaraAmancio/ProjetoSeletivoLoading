import React from 'react';
import './App.css';

import Header from './components/header';
import Footer  from './components/footer';
import Home from './pages/home';

import { BrowserRouter as Router} from "react-router-dom";
import { RoutesApp } from "./routes";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <RoutesApp />
        </main>
        <Footer />
      </Router>
    </div>
  );
}



export default App;
