
import { useState } from 'react';
import './App.css';
import Icon from './components/Icon';
import Button from './components/Button';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
function App() {
  let a = 5;
  let b= 'Романа';

  const str = `xer cm - ${a} y ${b}`;
  console.log(str)
  const onclick1 = () => {
    console.log(3);
  };
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
    <div className="App">

      {sum === 11 && <div>xerpizda2</div>}
      </div>
  return (
    <div className="App">  
    <Button onBtnPress={onClick1}   disabled={disabled} className={xerpizda} text={sum}>
        2
      </Button>
      <Button onBtnPress={onClick2} secondary={secondary}>
        Button 2
      </Button> 
      <Button onBtnPress={() => {}}>Button 3</Button>
      <Icon  iconName={"cloud"} size={"2xl"} icon1={'icon1'} style={{margin:15}}  onClick={onclick1} 
      ></Icon>
      <Icon iconName={"ghost"} style={{margin:25}}  icon2={'icon2'}></Icon>
      <Button1   standart={'start'}>GAMA</Button1>
      <Button2  ShowIcon  standart2={'start2'}>Roman-desantnik</Button2>
      <Button3   myIcon={"fire"}  standart3={'start3'}>Zalupa</Button3>
      <Button1  text={'asdwe'} standart={'start'}></Button1>
      <Button3     standart3={'start3'}>Piska</Button3>
    </div>
  );
}

export default App;
