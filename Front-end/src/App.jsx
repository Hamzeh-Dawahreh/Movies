import { useState } from "react";
import Navbar from "./Navbar";
import Body from "./body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
