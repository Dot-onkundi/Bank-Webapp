import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 text-white bg-[#051b61]'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3  ">
            <div className="lg:col-span-2">
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Do you wish to make an inquiry? </h1>
                <p> Let our representatives get in touch </p>
            </div>
            <div className="my-4">
                <div className='flex flex-col  sm:flex-row items-center justify-between w-full '>
                <input className=' p-3 w-full rounded-md ' type='email' placeholder='Enter email'/>
                <button className='bg-white text-gray-700 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 hover:text-[#051b61]' > Submit </button>

                </div>
                <p> We care about the protection of your data . Read our <span className='text-green-700'> Privacy Policy.</span></p>

                
                



            </div>
 

        </div>



    </div>
  )
}

export default Newsletter