import { Armchair, Check, Info, Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>

      {/* Top Navbar */}
      <div className='navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full'>
        <div className='lg:container flex justify-between items-center'>
          <p className=' flex items-center gap-2 text-sm font-inter font-normal text-white capitalize'> <Check /> Free on all orders over $50 </p>
          <div className='navbar_top_right flex items-center gap-4'>
            <select defaultValue="Server location" className="bg-[#272343] h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white ">
              <option >eng</option>
              <option>nepali</option>
            </select>
            <button>
              <Link className=' flex items-center text-sm text-white font-inter font-normal capitalize'>Faqs</Link>
            </button>
            <button>
              <Link className='flex items-center text-sm text-white font-inter font-normal capitalize'>
                <Info />
                need help</Link>
            </button>
          </div>
        </div>
      </div>


      {/* middle Navbar */}
      <div className='navbar_middle flex items-center justify-center bg-[#f0f2f3] h-[84px] w-full'>
        <div className='lg:container grid grid-cols-3 justify-between'>
          <div className='logo_wrapper'>
            <Link to="/" className='text-2xl text-black font-inter font-medium capitalize flex items-center gap-2'> <Armchair size="2rem" color='#029fae' />E-commerce</Link>
          </div>
          <div className='search_box'>
            <form action="" className=' max-w-96 h-[44px] relative'>
              <input type="text" placeholder='Search here....' className='w-full h-full bg-white rounded-lg pl-4' />
              <button className='absolute to-50% right-4 translate-y-1/2'>
                <Search size="22px" color='#272343' />
              </button>
            </form>
          </div>


          {/*navbar middle right */}
          <div className="navbar_middle_right flex items-center">
            <button className="btn capitalize">
              <ShoppingCart />cart <div className="badge badge-sm badge-secondary">+2</div>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
