
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [disabled, setDisabled] = useState(false)

  const onClick1 = () => {
    console.log(1)
    setDisabled(true)
  }

  const onClick2 = () => {
    console.log(2)
  }
  return (
    <div className="App">
      <Button onClick={onClick1} disabled={disabled}>
        Button 1
      </Button>
      {disabled && <div>Кнопка задізейблена</div>}
      {disabled ? <div>Кнопка задізейблена</div> : <div>Кнопка не задізеблена</div>}
      <Button onClick={onClick2} secondary={true} >
        Button 2
      </Button> 
      <Button style>Button 3</Button>
    </div>
  );
}

export default App;
