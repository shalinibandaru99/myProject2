import react ,{useState} from 'react';
import Display from './Display';

function InputValues() {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  

const Handler=(e)=>{
   setFirst(document.getElementById('fname').value)
    setLast(document.getElementById('lname').value)
   setPhone(document.getElementById('phone').value)
};
  
  

  return (
    <div>
     <form>
     <label for="fname">First name:</label>
     <br></br>
     <input type="text" id="fname" name="fname" />
     <br></br>
     <label for="lname">Last name:</label>
     <br></br>
    <input type="text" id="lname" name="lname"  />
    <br></br>
    <label for ="phone">PhoneNumber:</label>
    <br/>
    <input type="text" id="phone" name="number" />
    <br></br>
    <button onClick={Handler}>Click Me</button>
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
