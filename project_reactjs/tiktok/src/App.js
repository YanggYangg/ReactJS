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
 
  const [checked, setChecked] = useState(2)
  console.log(checked)
  
  //Checked lưu id của course
  const handelSubmit = () => {
    console.log({id: checked})
  }

 
  return (
    <div style={{padding: 32}}>
      {course.map(course => (
        <div key={course.id}>
          <input 
          type="radio"
          checked={checked === course.id}
          onChange={() => setChecked(course.id)}
            />
          {course.name}
        </div>
      ))}

      <button onClick={handelSubmit}>Register</button>
    </div>
  );
}

export default App;
