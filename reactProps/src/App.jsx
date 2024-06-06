import { useState } from "react";

import Header from "./components/header";
import Core from "./components/core";
import Examples from "./components/examples";

function App() {

  return (
    <div>
      <Header />
      <main>
        <h1>hello commiting to check if its working</h1>
        <Core/>
        <Examples />
      </main>
    </div>
  );
}

export default App;
