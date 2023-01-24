import React from 'react'
import Environm from '../components/Assets/environ.svg'

const Infosection = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '> 
        <img className='mx-auto my-4' src={Environm} alt='none'/>
        <div className="flex flex-col justify-center ">
            <p className='text-green-700 uppercase font-bold'> Social Responsibility </p>
            <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Environmental, Social and Governance</h1>
            <p>XFLIR believes that the prosperity of business and society is inextricably linked and as such investing in society generates a positive multiplier effect that will benefit society, the environment and the economy. To actualize this belief, XFLIR Kenya set up XFLIR Foundation to deliver a positive impact to society through social investment programs that create shared value for its stakeholders. The Foundation’s program approach is to work through implementing partners to deliver the objectives of the Foundation by seeking to leverage and complement resources, skills, experiences, knowledge and track records of partner organizations in a catalytic and value-adding manner.</p>
            <button className="bg-[#051b61] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 md: px-6 py-3 hover:scale-105 duration-500"> Join our cause </button>


        </div>


        </div>
        
    </div>
  )
}

export default Infosection