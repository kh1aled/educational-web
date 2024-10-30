import React from 'react'

const Salary = ({salary}) => {
    console.log('salary component');
    
  return (
    <h1>{salary}</h1>
  )
}

export default React.memo(Salary)