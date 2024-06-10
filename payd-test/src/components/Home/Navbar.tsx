import React from 'react'
import { Avatar} from '@chakra-ui/react'

function Navbar() {
  return (
    <div className='h-20 border-b border-white/5'>
        <nav className=' text-gray-300 flex'>

            {/*logo */}
            <div className='flex ml-12 pt-5 gap-1'>
                <img 
                src='/photos/logo.png'
                alt='logo'
                className='w-10 h-10'
                />
                <h1 className='text-2xl font-medium text-[#ffcc70] pt-[1px]'>TaskFlow</h1>
            </div>

            <div className='absolute right-12 top-4'>
            <Avatar bg='yellow.500' name='Salim Mwarika'  />
            </div>
        </nav>
    </div>
  )
}

export default Navbar