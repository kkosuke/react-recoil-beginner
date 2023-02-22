import React from 'react'
import { BrowserRouter, Link } from "react-router-dom"
import Router from './router/Router';
import {PrimaryButton} from './components/atoms/button/PrimaryButton';
import {SecondaryButton} from './components/atoms/button/SecondaryButton';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>テスト</SecondaryButton>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
