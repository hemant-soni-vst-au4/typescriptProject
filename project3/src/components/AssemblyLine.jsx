import React, { useState, useEffect } from 'react';
import AssemblyItems from './AssemblyItems';


const AssemblyLine = ({ stages }) => {
  const [input, setInput] = useState('');
  const [val, setVal] = useState([]);
  const [mouse, setMouse] = useState('');
  console.log(val);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  useEffect(()=>{
    console.log(val);
  },[val, mouse])

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal((prevState) => {
      return [...prevState, { id: Date.now(), index: 0, msg: input }];
    });
    
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
      setInput('');
    }
  }

  const handleLeftClick = (id, index) => {
    setMouse('Left');
    if (index >= stages.length - 1) {
      const newState = val.filter((el) => el.id !== id);
      setVal(newState);
    } else {
      const newState = val.map((el) =>
        el.id === id ? { ...el, id: Date.now(), index: el.index + 1 } : el
      );
      setVal(newState);
    }
  };

  const handleRightClick = (e, id, index) => {
    e.preventDefault();
    setMouse('Right');
    if (index < 1) {
      const newState = val.filter((el) => el.id !== id);
      setVal(newState);
    } else {
      const newState = val.map((el) =>
        el.id === id ? { ...el, id: Date.now() - 11111111111, index: el.index - 1 } : el
      );
      setVal(newState);
    }
  };
  
  

  return (
    <div>
        Add an Item:{' '}
        <input
          className="assembly-add-item"
          type="text"
          value={input}
          width="50"
          onChange={handleChange}
          onKeyPress={handleKeyDown}
        />
      <div className="assembly-data">
        {stages.map((stage, i) => (
            <AssemblyItems mouse={mouse} stage={stage} i={i} val={val} handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} />
        ))}
      </div>
    </div>
  );
};

export default AssemblyLine;
