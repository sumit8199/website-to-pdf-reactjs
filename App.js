import ReactPrint from 'react-to-print'
import './App.css';
import React from 'react';
import {useRef} from 'react';




function App() {
  const ref = useRef()
  return (
    <div className="print">
      <div className="sss">
        <div ref={ref} className='a'>
      <h1>Hello World</h1>
      <h1>Artificial Intelligence refers 
        to the intelligence of machines. This is in contrast to the natural intelligence of humans and animals. With Artificial Intelligence, machines perform functions such as learning, planning, reasoning and problem-solving.
         Most noteworthy, Artificial Intelligence is the simulation of human intelligence by machines. It is probably the fastest-growing development in the World of technology and innovation.
          Furthermore, many experts believe AI could solve major challenges and crisis situations.</h1>
      </div>
      </div>
    <ReactPrint trigger={() => <button>Print</button>} content={() => ref.current}/>
    </div>

  );
}


export default App;
