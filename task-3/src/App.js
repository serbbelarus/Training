import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Icon from './components/Icon';
import Button1 from './components/Button1';


function App() {
 let kyu = 'name';
 const onclick1 = () => {
  console.log(3);
};
let [secondary,setSecondary]= useState(false);
let [disabled,setDisabled]= useState(false);
let [xerpizda,setXerpizda]= useState('app_butonn');
let [sum,setSum]=useState(4);

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

      {sum === 11 && <div>givi</div>}

  <Button1></Button1>
<Button  IconName={kyu} onBtnPress={onClick1}   disabled={disabled} className={xerpizda} text={sum}>
        Button1
      </Button>
      <Button onBtnPress={onClick2} secondary={secondary} >
        Button 2
      </Button> 
      <Button onBtnPress={() => {}}>Button 3</Button>
      <Icon  iconName={"cloud"} size={"2xl"} icon1={'icon1'} style={{margin:150}}  onClick={onclick1} 
      ></Icon>
      <Icon iconName={"ghost"} style={{margin:250}}  icon2={'icon2'}></Icon>
    </div>
    );
}

export default App;

