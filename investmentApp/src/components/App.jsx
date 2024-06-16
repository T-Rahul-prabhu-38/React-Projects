import { useState } from "react"

import Header from "./header"
import UserInput from "./userInput"
import Results from "./results";


function App() {

  const [userinput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    Duration: 10,
  });


  function handleChange(inputIdentifier, newVal) {
    setuserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newVal
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userinput}/>
      <Results user={userinput}/>
    </>
  )
}

export default App
