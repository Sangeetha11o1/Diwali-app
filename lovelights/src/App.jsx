import React, { useState } from 'react'
import Entry from './Components/Entry';
import Wishes from './Components/Wishes';
import Gift from './Components/Gift';
import Memory from './Components/Memory';
import End from './Components/End';
import './index.css';

const App = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => prev+1);
  return (
    <>
      {step === 0 && <Entry onStart={next}/>}
      {step === 1 && <Wishes onStart={next}/>}
      {step === 2 && <Gift onStart={next}/>}
      {step === 3 && <Memory onStart={next}/>}
      {step === 4 && <End onStart={next}/>}



    </>
  )
}

export default App