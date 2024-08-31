import { useState } from 'react'

//Lưu ý
//1. Array
//2. Reference types

//Vd
//1. Random gift
//2. Two-way binding
//3. Todolist

// const gifts = [
//   'CPU i9',//0
//   'RAM 32GB RBG',//1
//   'RBG Keyboard'//2
// ]

//Response from API
const course = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const handelSubmit = () => {
    //CALL API
    console.log({
      name, 
      email
    })
  }

 
  return (
    <div style={{padding: 32}}>
      <input  
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input  
        value={email}
        onChange={e => setEmail(e.target.value)}
      />


      <button onClick={handelSubmit}>Register</button>
    </div>
  );
}

export default App;
