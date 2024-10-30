import React from 'react'

const Button = ({text , action}) => {
    console.log('button component');
    
  return (
    <button onClick={action} style={{padding:"20px" , background:"red" , color:"#fff" , margin:"10px"}}>{text}</button>
  )
}

export default React.memo(Button)