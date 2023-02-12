import React from 'react'
// import Typed from 'react-typed';


const Hero=()=> {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] mt-[120px] w-full h-screen mx-auto text-center flex flex-col '>
            <p className='text-[white]  p-2 '> INVEST AND SAVE FOR THE FUTURE </p> 
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 '> XFLIR GROUP PLC</h1>
            <div className="flex justify-center items-center ">
                <p className='md:text-3xl sm:text-2xl text-xl py-2' > Leading Financial Partner  </p>
                {/* <Typed className='md:text-3xl sm:text-2xl text-xl md:pl-2 pl-1' strings={['Kenyans', 'Rwandese', 'Ugandans', 'Tanzanians']} typeSpeed={100} backSpeed={200} loop /> */}
            </div>
            <p className='md:text-xl  text-gray-500 '>We are a leading banking and insurance group in Eastern Africa with a presence in Kenya, Mauritius, Rwanda, Tanzania and Uganda</p>
            <button className="bg-white text-gray-700 w-[200] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-500">
                Open account

            </button>

        </div>


    </div>
  )
}

export default Hero