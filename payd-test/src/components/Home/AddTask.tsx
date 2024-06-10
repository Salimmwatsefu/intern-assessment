import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Icon, Input } from '@chakra-ui/react'
import { HiPlusCircle } from "react-icons/hi2";








function AddTask() {

  return (
    <div className=' border-r w-[450px] h-[86vh] border-white/5 bg-[#232323]'>

        <div className=' text-gray-300 flex justify-center pt-20'>
            <Card className='w-[350px] ' bgColor={'RGBA(0, 0, 0, 0.16)'}>
                <CardHeader className='flex gap-1'>
                <Icon as={HiPlusCircle} w={7} h={7} color='yellow.700' />
                    <Heading size='sm' className='mt-[3px]' color={'gray.100'}>
                        Add New Task
                    </Heading>
                </CardHeader>

                <CardBody>

                <form action="#" className="">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                     <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg bg-[#3f260f] p-4 pe-12 text-sm shadow-sm text-gray-200 placeholder-gray-400"
                            placeholder="Enter Task Name"
                        />
                        <input
                            type="text"
                            className="w-full rounded-lg bg-[#3f260f] p-4 pe-12 text-sm shadow-sm text-gray-200 placeholder-gray-400 my-5"
                            placeholder="Enter Task Description"
                        />
                        <input
                            type="text"
                            className="w-full rounded-lg bg-[#3f260f] p-4 pe-12 text-sm shadow-sm text-gray-200 placeholder-gray-400"
                            placeholder="Enter User ID"
                        />

                     </div>
                </div>

                <div className=' flex gap-7 justify-center'>

                <button
                    type="submit"
                    className="block w-32 rounded-lg bg-[#252525] px-5 py-3 text-sm font-medium text-white mt-10"
                    >
                    Reset
                </button>

                <button
                    type="submit"
                    className="block w-32 rounded-lg bg-yellow-700 px-5 py-3 text-sm font-medium text-white mt-10"
                    >
                    Add Task
                </button>

                </div>

      


      
    </form>
                   

                </CardBody>
            </Card>

        </div>
        
    </div>
  )
}

export default AddTask