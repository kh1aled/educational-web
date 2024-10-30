import React from 'react'

const Count = ({count}) => {
    console.log('count component');
  return (
    <h1 style={{background:"blue", color:"#fff",margin:"0 10px"}}>
        {count}
    </h1>
  )
}

export default React.memo(Count)