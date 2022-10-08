import React from 'react'
import'./fullName.css'




let fulln=prompt("whats your name")
function FullName() {

  while(fulln===""){
    fulln=prompt("whats your name please")
  }
  
  return (
    <div>
        <p>Hello <span className='pname'>{fulln}</span> we are happy that you are here</p>
    </div>
  )
}

export default FullName
