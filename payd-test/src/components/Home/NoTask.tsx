import React from 'react'

function NoTask() {
  return (
    <div>
        <div>
            <div className='flex justify-center mt-10'>
                <img
                src='/photos/Notaskbg.png'
                alt='man adding tasks'
                className=' w-[250px]'
                />
            </div>
            <div className='text-center'>
                <p className=' text-lg font-semibold text-gray-100'>What do you need to get done Today?</p>
                <p className=' text-base text-yellow-900'>You have not added any tasks yet</p>
                <p className=' text-sm text-gray-500'>Please add one</p>


            </div>
        </div>
    </div>
  )
}

export default NoTask