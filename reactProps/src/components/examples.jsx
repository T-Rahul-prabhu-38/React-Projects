import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./buttons"
import Section from "./section";
import Tabs from './tabs'

export default function Examples(){


  const[tabContent,settabContent] = useState();

  function selectHandler(label){
    console.log(label);
    
    settabContent(label);
  }

  return(  <Section id="examples">
  <h2>examples</h2>

    <Tabs ButtonsContainer="menu" buttons={
      <>
      <TabButton isSelected={tabContent==='components'} onSelect={()=>selectHandler('components')}>components</TabButton>
    <TabButton isSelected={tabContent==='jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
    <TabButton isSelected={tabContent==='props'} onSelect={()=>selectHandler('props')}>Props</TabButton>
    <TabButton isSelected={tabContent==='state'} onSelect={()=>selectHandler('state')}>State</TabButton>
      </>
    }>
    <div id="tab-content">
    {!tabContent ? 
      <p>Eplore now!</p> 
      :
      <>
         <h3>{EXAMPLES[tabContent].title}</h3>
      <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>
            {EXAMPLES[tabContent].code}
          </code>
        </pre>
      </>  
    } 
  </div>
  </Tabs>
    

  
</Section>)
}