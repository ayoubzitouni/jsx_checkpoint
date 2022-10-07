import React from 'react'





let fulln=prompt("whats your name")
function FullName() {

  while(fulln===""){
    fulln=prompt("whats your name please")
  }

  return (
    <div>
        <p>Name: {fulln}</p>
    </div>
  )
}

export default FullName
