import CoreConcepts from "./coreconcepts";
import { CORE_CONCEPTS } from "../data";
export default function Core() {
    return(
        <>
          <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {/* {CORE_CONCEPTS.map((conceptItem)=>{
              <CoreConcepts {...conceptItem} />
          })} */}
          <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}  
            image = {CORE_CONCEPTS[0].image}
          />
          <CoreConcepts {... CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        </>

    );

}