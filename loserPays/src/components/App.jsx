import { useState,useContext } from 'react'
import { MyContext } from '../context';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import StageOne from './stage_one';
import StageTwo from './stage_two';


function App() {
  const [count, setCount] = useState(0);
  const context = useContext(MyContext);

  console.log(context);

  return (
    <div className='wrapper'>
      <div className='center-wrapper'>
        <h1>who pays the bill</h1>
        {
          context.stage === 1? <StageOne/> :<StageTwo/>
        }
      </div>
    </div>
  )
}

export default App;
