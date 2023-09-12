import React, { useState, useEffect } from 'react';

function HookDemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log(`Count is currently: ${count}`);


    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
      }, [count]);

    return (
        <>
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div>
        <p>Count: {count2}</p>
          <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        </div>

        </>

      );
  }
  
  export default HookDemo;