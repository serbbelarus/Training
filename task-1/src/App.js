
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
 let [secondary,setSecondary]= useState(false);
let [disabled,setDisabled]= useState(false);
let [xerpizda,setXerpizda]= useState('app_butonn');
let [sum,setSum]=useState(2);

  const onClick1 = () => {
setSecondary(!secondary);
 setDisabled(!disabled);
    setXerpizda('');
    let a = 3;
    let b = 8;

    setSum(a+b);
  };

  const onClick2 = () => {
    setSecondary(!secondary);
     setDisabled(!disabled);

  }

  return (
    <div className="App">

      {sum === 11 && <div>xerpizda2</div>}
      

      <Button onBtnPress={onClick1}   disabled={disabled} className={xerpizda} text={sum}>
        2
      </Button>
        
      <Button onBtnPress={onClick2} secondary={secondary} >
        Button 2
      </Button> 
      <Button onBtnPress={() => {}}>Button 3</Button>
    </div>
  );
}

export default App;
