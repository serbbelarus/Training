import './App.css';
import Icon from './components/Icon'
import classNames from "classnames";

function App() {
  let a = 5;
  let b= 'Романа';

  const str = `xer cm - ${a} y ${b}`;
  console.log(str)
  const onclick1 = () => {
    console.log(3);
  };
  const clasess = classNames(
    'icon1',
    'icon2',
  );
  return (
    <div className="App">
       <i className={clasess} ></i>
      <Icon  iconName={"cloud"} size={"2xl"} className={'icon1'} style={{margin:15}}  onClick={onclick1} 
      ></Icon>
      <Icon iconName={"ghost"} style={{margin:25}}  className={'icon2'}></Icon>
    </div>
  );
}

export default App;
