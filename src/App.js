import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Home data={data} setData={setData}/>
    </div>
  );
}

export default App;
