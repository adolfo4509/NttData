import React from "react";
import { NavBar } from "./navBar/NavBar";

import { Body } from "./Body/Body";

function App() {
  return (
    <div>
      <NavBar />
      <Body searchsend={undefined} />
    </div>
  );
}

export default App;
