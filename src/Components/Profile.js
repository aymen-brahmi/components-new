import React from 'react'
import imageInSrc from './imageInSrc.jpeg';

function Profile() {
  return (
    <div className="profiles">
      <p>HELLO MY NAME IS  </p>
      <h1>JHON DOE</h1>
      <p>,AND I MAKE HORRIBLE WEBSITES.</p>
    <img src={imageInSrc} alt="images dans src"/>
    </div>
  )
}

export default Profile