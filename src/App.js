import React from 'react';

import './App.css';

import Workout from './Components/Workout';

function App() {
  return (
    <div className="App">
     <h1 style={fontStyle}>Work Tracker</h1>
     <Workout />     
    </div>
  );
}

const fontStyle = {
  backgroundColor: '#000',
  color: "#fff",
  padding: "10px",
  marginTop:"0px",
}
export default App;
