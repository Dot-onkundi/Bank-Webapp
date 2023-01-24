import React from 'react'
import TagOne from '../components/Assets/tagTwo.svg'
import TagTwo from '../components/Assets/tagThree.svg'
import TagThree from '../components/Assets/tagOne.svg'
import {TiTick} from 'react-icons/ti'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={TagOne} alt='none' />
                <h2 className='text-2xl font-bold text-center'>XFLIR Visa Debit Card</h2>
                <p className=' text-center text-4xl font-bold'>Kes 350 </p>
                <div className="div">
                  <p className='py-2 flex  mt-8'> < TiTick  className='fill-[#051b61]'/>Daily Limit Kes. 100,000 </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Worldwide usage </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Lock and Unlock on XFLIR OTG </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Reward Points for every transaction </p>
                </div>
                <button className='bg-[#051b61] text-white hover:text-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>



            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] bg-[#051b61] rounded' src={TagThree} alt='none' />
                <h2 className='text-2xl font-bold text-center'>XFLIR USD Visa Debit Card</h2>
                <p className=' text-center text-4xl font-bold'>$10 </p>
                <div className="div">
                  <p className='py-2 flex  mt-8'> < TiTick className='fill-[#051b61]'/>Daily Limit $ 100,000 </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Worldwide usage </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Withdraw funds in US Dollars </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Reward Points for every transaction </p>
                </div>
                <button className='bg-[#051b61]  hover:text-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>



            </div>
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={TagTwo} alt='none' />
                <h2 className='text-2xl font-bold text-center'>XFLIR Visa Platinum Debit Card</h2>
                <p className=' text-center text-4xl font-bold'>$ 5 </p>
                <div className="div">
                  <p className='py-2 flex  mt-8'> < TiTick  className='fill-[#051b61]'/>Daily Limit Kes. 100,000 </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Visa Offers ad Promotion </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Global Emergency Assistance </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Reward Points for every transaction </p>
                </div>
                <button className='bg-[#051b61]  hover:text-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>



            </div>

        </div>


    </div>
  )
}

export default Cards