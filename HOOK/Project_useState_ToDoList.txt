import { useState } from 'react'

//Lưu ý
//1. Array
//2. Reference types

//Vd
//1. Random gift
//2. Two-way binding
//3. Todolist




function App() {
  const storageJobs =JSON.parse(localStorage.getItem('jobs'))
  //console.log(storageJobs);//Mảng


  const [job, setJob] = useState('');
  //Đọc ngược từ local storage lên để hiển thị danh sách công việc
  const [jobs, setJobs] = useState(storageJobs || []);

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      //console.log(jsonJobs);
      return newJobs;
    });
    setJob('');
  }


  //console.log(job);
  
  return (
    <div style={{padding: 32}}>
      <input 
      value={job} 
      on onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>


      <ul>
        {jobs.map((job, index) => (
           <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
