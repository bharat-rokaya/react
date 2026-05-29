import { useState } from "react";

const Calculate = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>Count: {value}</h2>
      <button onClick={() => setValue(value+1)}>Increase</button>
      <button onClick={() => setValue(value-1)}>Decrease</button>
    </div>
  );
}

export default Calculate;