
"use client"
import React, { useState } from 'react';

function Page() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [maintask,setmaintask]=useState([]);
  const deletehandler=(i)=>{
       let copytask=[...maintask]
       
       copytask.splice(i,1)
       setmaintask(copytask)
  }
  const handleSubmit = (e) => {
  
  setTitle('');
  setDesc('');
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    console.log(maintask);
    // const outputDiv = document.getElementById('output');
    // outputDiv.innerHTML = `
    //   <h2>Submitted Values:</h2>
    //   <p>Title: ${title}</p>
    //   <p>Description: ${desc}</p>
    // `;
  };
  let rendertask=<h2>No Task Available</h2>
  if(maintask.length>0){
  rendertask=maintask.map((t,i)=>{
  return <li key={i} className='flex items-center justify-between bg-pink-300 mb-5 rounded text-lg font-semibold'>
  <div className=' flex justify-around mb-5 w-2/3 pt-3' >
    <h5 className=''>{t.title}</h5>
      <h5>{t.desc}</h5>
  </div>
  <button onClick={deletehandler} className='bg-green-500 px-4 py-2 mr-36 rounded text-white'>Delete</button>
  </li>
  
  })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-2xl text-center'>ToDo List</h1>
      <form onSubmit={handleSubmit} className='flex justify-center mt-10 mb-5 '>
        <input
          type='text'
          className='border-zinc-700 border-2 m-5 px-4 py-2'
          placeholder='enter task'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <input
          type='text'
          className='border-zinc-700 border-2 m-5 px-4 py-2'
          placeholder='enter description'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input type='submit' className='bg-red-400 text-white px-4 py-2 rounded m-5 cursor-pointer' />
      </form> 
        <hr/>
        <div className='p-5 bg-slate-200 mt-5'>
          <ul className=''>
            {rendertask}
          </ul>
        </div>
        <hr/>
      {/* <div id="output"></div> */}
    </>
  );
}

export default Page;
