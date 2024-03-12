import { useState } from "react";

function increment() {
  console.log("increment");
  setCount((count) => count + 1);
}
function decrement() {
  setCount((count) => count - 1)
}

const ButtonGroup = () => {
  const [count, setCount] = useState(0);

  
  return (
    <>
      <button onClick={(count) => { increment }}>
        +
      </button>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        +
      </button> */}
      
      <button onClick={(count) => { decrement }}>
        -
      </button>
    </>
  );
}

export default ButtonGroup