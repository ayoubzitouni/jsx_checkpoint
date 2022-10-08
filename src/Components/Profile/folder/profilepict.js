import React from 'react'
import Profilepict from "./media/index.jpg"
import './media/profilepict.css'




function profilepict() {
  return (
    <div className='image_div'>
        <img src={Profilepict} alt="profile picture"/>
    </div>
  )
}

export default profilepict