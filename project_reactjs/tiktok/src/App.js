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
 
  const [checked, setChecked] = useState([])
  console.log(checked)
  
  //Checked lưu id của course
  const handelSubmit = () => {
    console.log({ids: checked})
  }

  //Mỗi lần check sẽ có một mảng chứa 1 id nhưng nó chỉ chứa 1 id
  const handelCheck = (id) => {
    setChecked(prev => {
      const isCheck = checked.includes(id)
      if(isCheck){
        //uncheck
        //gọi hàm filter để lọc ra những phần tử khác với id
        return checked.filter(item => item !== id)
      }else{
        //check
        return [...prev, id]
      }
    })

  }

  /**
   * Checkbox khi chọn nhiều thì nó sẽ tạo ra danh sách 
   * Danh sách này sẽ được lưu vào một mảng
   */
 
  //include sẽ trả về true nếu id có trong mảng checked
  return (
    <div style={{padding: 32}}>
      {course.map(course => (
        <div key={course.id}>
          <input 
          type="checkbox"
          checked={checked.includes(course.id)}
          onChange={() => handelCheck(course.id)}
            />
          {course.name}
        </div>
      ))}

      <button onClick={handelSubmit}>Register</button>
    </div>
  );
}

export default App;
