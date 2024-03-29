
import { useState } from 'react';
import './App.css';
import Chip from './components/Chip';
import Image from './components/Image';
import Select from './components/Select';


function App() {
  
   let [display, setDisplay] = useState(true);
   
   const onClose1 = (event) => {
    event.stopPropagation();
    setDisplay(false);
   };

    console.log(display)

  const onClickChip = () => {
    alert('Hello,Roman!');
  };

    <div className="App">
      
      
      </div>

  const displayDiv = () => {
    if (false) {
      return  <div>true</div>
    } else {
      return <div>false</div>
    }
  }
  const onClickImageRomashki = () =>{
    alert('Romashki');
  };
  const items =['Germany','Russia','Belarus'];
  
  
  return (
    <div className="App" onClick={() => alert('div')}>  
        {!!display===true && <Chip 
        className={'start5'}
        myIcon={'hippo'} 
        size={"2xl"} 
        onClose={onClose1} 
        onClick={onClickChip}
        iconProps={{size: '2xl'}}
        >Chip</Chip> }

        {false ? <div>1</div> : <div>2</div>}
        {displayDiv()}
        <Chip className={'start6'}>
          </Chip>
        <div className='div'>
        <Image 
         src={'https://flor2u.ru/images/uploads/conversion/85c/85cd3a71267f3f7a463e94f799f6470f/85cd3a71267f3f7a463e94f799f6470f-medium.jpg'}
        alt={'ромашка мой=*'}
        style={{
          width:350,
          height:200,
          border:3,
          objectFit: 'cover'}}
        onclick={onClickImageRomashki}
        className={'circle'}
        >  
        </Image>
        <Select  options={items}>
        
      </Select>
        </div>
    </div>
  );
}

export default App;
