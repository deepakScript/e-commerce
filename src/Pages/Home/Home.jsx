import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Delivery from '../../Components/Delivery/Delivery'

const Home = () => {
  return (
    <div>
      {/*banner components */}
      <div className='w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center
      rounded-3xl'>
       <Banner></Banner>
      </div>


      {/* delivey componet */}
      <div className='w-full min-h-[150px] bg-white shadow-md p-7' >
        <Delivery></Delivery>
      </div>
    </div>
  )
}

export default Home
