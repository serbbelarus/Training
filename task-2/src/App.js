
import { useState } from 'react';
import './App.css';
import Chip from './components/Chip';


function App() {
   let [onClose, setonClose] = useState(true);
   const OnClose1 = () => setonClose(!onClose);
  
  const onclickChip = () => {
    alert('Hello,Roman!');
  };

    <div className="App">
      
      
      </div>
  return (
    <div className="App">  
      <Chip standart5={'start5'} myIcon={'hippo'} size={"2xl"} onClose={OnClose1} onClick={onclickChip} >
        Chip
        </Chip>
    </div>
  );
}

export default App;
