import { useState } from "react";
import Content from "./Content";

//Mounted / Unmounted

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{padding: 32}}>
      <button
        onClick={() => setShow(!show)}
        style={{padding: 8, fontSize: 16}}
      >Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
