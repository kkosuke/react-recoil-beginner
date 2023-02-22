import React from 'react'
import { BrowserRouter, Link } from "react-router-dom"
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
