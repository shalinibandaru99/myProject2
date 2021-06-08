import react ,{useState} from 'react';
import Display from './Display';

function InputValues() {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  

const Handler=(e)=>{
  setFirst(e.target.value)
}

const Handler1=(e)=>{
  setLast(e.target.value)
}


const Handler2=(e)=>{
  setPhone(e.target.value)
}
  
  

  return (
    <div>
     <form>
     <label for="fname">First name:</label>
     <br></br>
     <input type="text" id="fname" name="fname" onChange={Handler} />
     <br></br>
     <label for="lname">Last name:</label>
     <br></br>
    <input type="text" id="lname" name="lname" onChange={Handler1} />
    <br></br>
    <label for ="phone">PhoneNumber:</label>
    <br/>
    <input type="text" id="phone" name="number" onChange={Handler2}/>
    <br></br>
    <button>Click Me</button>
   </form>
   <div>
     <Display first={first}/>
     <Display last={last}/>
     <Display phone={phone}/>
   </div>
    </div>
    
  );
}

export default InputValues;
