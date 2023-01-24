import React, {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'


const Navbar = () => { 
    const [nav, setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div  className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white '>
        <h1 className='w-full text-3xl font-bold text-[#fff]'>
            XFLIR.
        </h1>
        <ul className=' hidden md:flex'>
            <li className='p-4'>Home </li>
            <li className='p-4'>About Us </li>
            <li className='p-4'>Board of Directors </li>
            <li className='p-4'>XFLIR Foundation </li>
            <li className='p-4'>Investor Relations </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav? <AiOutlineClose size={24}/> : <HiMenuAlt3 size={24}/> }
           
        </div>
        <div  className={nav? 'text-white fixed left-0 top-0 w-[30%] h-full border-r border-r-transparent bg-inherit ease-in-out duration-500 ': ' fixed left-[-100%]'  }  >

            <ul className="ul pt-24 p-4 ">
                <li className='p-4 '>Home </li>
                <li className='p-4'>About Us </li>
                <li className='p-4'>Board of Directors </li>
                <li className='p-4 '>XFLIR Foundation </li>
                <li className='p-4 '>Investor Relations </li>


            
                

            </ul>


        </div>
        
    </div>
  )
}

export default Navbar