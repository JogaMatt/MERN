import React, {useState} from 'react';

const Counter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if(count == 0){
            setCount(count + 1);
        } else {
            setCount(count * 3);
        }
        
    }
  return (
    <div>{count}
    <button onClick={handleClick}>Click Me</button></div>
  )
}

export default Counter