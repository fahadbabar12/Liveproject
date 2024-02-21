import React from 'react'

const Home = () => {
  const user = localStorage.getItem('user')
  const name = user ? JSON.parse(user).name : null

  console.log(user)
  return (
  <>
  <div className='d-flex justify-content-center item-center fs-1'>
  Welcome {name} to my Website
  </div>
  </>

    
  )
}

export default Home