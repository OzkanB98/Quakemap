import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import MapChart from './components/Map';
import { Feature } from './types/Earthquake';

function App() {
  const[selected, setSelected] = useState<Feature>();

  return (
    <div className="App">
      <Card feature={selected}/>
      <MapChart onClick={(clicked) => {
        setSelected(clicked);
      }}/>
    </div>
  );
}

export default App;
