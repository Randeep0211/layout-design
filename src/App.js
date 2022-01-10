import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Contents/Content';

export default function App() {
  return (
    <div className="App">
      <div className="one">
        <Sidebar />
      </div>

      <div className="two">
        <Header />
        <Content />
      </div>
    </div>
  );
}
