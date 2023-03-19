import './App.css';
import Header from './components/Header';
import { useState } from 'react';
function App() {

  const [num,setNum] = useState(1);

  function Inc(){
    setNum (num + 1);
  }
  function Dec(){
    setNum(num -1);
  }
  return (
    <div className='body'>
        <Header />
        <div className='num'>
            <h1>{num}</h1>
            <div className='buttons'>
              <button onClick={Inc}>Increment</button>
              <button onClick={Dec}>Decrement</button>
            </div>
        </div>

    </div>
  );
}

export default App;
