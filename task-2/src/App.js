import './App.css';
import Icon from './components/Icon';
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
      <Icon  iconName={"cloud"} size={"2xl"} icon1={'icon1'} style={{margin:15}}  onClick={onclick1} 
      ></Icon>
      <Icon iconName={"ghost"} style={{margin:25}}  icon2={'icon2'}></Icon>
    </div>
  );
}

export default App;
