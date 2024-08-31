//Làm ứng dụng đếm số, nhấn vào button nó sẽ tăng lên 1 2 3 4 5
import { useState } from 'react'


function App() {
 
  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Noi"
  })

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'I am a software engineer'
    })
  }

 
  return (
    <div className="App" style={{padding: 20}}>
      //Comment: chuyển object thành chuỗi
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
      
    </div>
  );
}

export default App;
