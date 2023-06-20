import './App.css';
import Icon from './components/Icon'

function App() {
  let a = 5;
  let b= 'Романа';

  const str = `xer cm - ${a} y ${b}`;
  console.log(str)
  const onclick1 = () => {
    console.log(3);
  };
  return (
    <div className="App">
      
      <Icon iconName={"cloud"} size={"2xl"} style2={'style2'} className='icon' onClick={onclick1} 
      ></Icon>
      <Icon iconName={"ghost"}  style1={'style1'}></Icon>
    </div>
  );
}

export default App;
