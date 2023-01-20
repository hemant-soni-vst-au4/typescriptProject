import React, {useState} from 'react';
import './App.css';
import Input from './Component/Input';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  return (
    <div className="App">
      <span className="heading">Task To DO</span>
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;



