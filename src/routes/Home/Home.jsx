import React, { useCallback, useMemo, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Lessons from '../../Components/Lessons/Lessons'
import Navbar from '../../Components/Navbar/Navbar'
import Count from './Count'
import Salary from './Salary'
import Button from './Button'



const Home = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // هذه الدالة تمثل عملية حسابية مكلفة
  const expensiveComputation = (num) => {
    console.log('Expensive computation running...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // تثبيت نتيجة العملية باستخدام useMemo
  const computedValue = useMemo(() => expensiveComputation(count), [count]);
  return (
    <>

    {/* <Navbar/> */}
    <div className='home d-flex justify-content-center align-items-center w-100' style={{height:"93vh"}}>
    <div>
      <h1>Count: {count}</h1>
      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
     
      
{/*         
        <Sidebar/>
        <Lessons/> */}
    </div>

    
    </>
    
  )
}

export default Home