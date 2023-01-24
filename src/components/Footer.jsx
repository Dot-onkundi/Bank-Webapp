import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebook,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaLinkedin,


} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <div className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white ' >
        <div className="div">
        <h1 className='w-full text-3xl font-bold text-[#fff]'>
            XFLIR.
        </h1>
        <p className='md:text-xl py-4 '>We are a leading banking and insurance group in Eastern Africa with a presence in Kenya, Mauritius, Rwanda, Tanzania and Uganda</p>
        <div className="flex justify-between md:w-[75%] my-6">
            <FaDribbbleSquare size={30}/>
            <FaFacebook size={30} />
            <FaGithubSquare size={30} />
            <FaTwitterSquare  size={30}/>
            <FaInstagramSquare size={30} />
            <FaYoutubeSquare size={30} />
            <FaLinkedin size={30}/>
        </div>       


        </div>
        <div className="lg:col-span-2 flex justify-between  ">
            <div className="div">
            <h6 className='font-medium text-gray-200 '> Personal</h6>

                <ul>
                    <li className='py-2 text-sm'>Cards</li>
                    <li className='py-2 text-sm'>Loans</li>
                    <li className='py-2 text-sm'>Wealth Management</li>
                    <li className='py-2 text-sm'>Custodial services</li>
                    <li className='py-2 text-sm'>Insurance</li>


                </ul>



            </div>
            <div className="div">
            <h6 className='font-medium text-gray-200 '> Diaspora</h6>

                <ul>
                    <li className='py-2 text-sm'>Accounts</li>
                    <li className='py-2 text-sm'>Cards</li>
                    <li className='py-2 text-sm'>Loans</li>
                    <li className='py-2 text-sm'>Investments</li>
                    <li className='py-2 text-sm'>Insurance</li>


                </ul>



            </div>
            <div className="div">
            <h6 className='font-medium text-gray-200 '> Business</h6>

                <ul>
                    <li className='py-2 text-sm'>Accounts</li>
                    <li className='py-2 text-sm'>Business Solutions</li>
                    <li className='py-2 text-sm'>Trade Finance</li>
                    <li className='py-2 text-sm'>Loans</li>
                    <li className='py-2 text-sm'>Investment</li>


                </ul>



            </div>
            <div className="div">
            <h6 className='font-medium text-gray-200 '> About us</h6>

                <ul>
                    <li className='py-2 text-sm'>XFLIR Foundation</li>
                    <li className='py-2 text-sm'>Anual Reports</li>
                    <li className='py-2 text-sm'>Directors</li>
                    <li className='py-2 text-sm'>News</li>
                    <li className='py-2 text-sm'>Careers</li>


                </ul>



            </div>
            


        </div>
        
    </div>
    <div className='text-white md:place-content-end text-sm justify-center items-center px-4 mx-auto'>
    <p > <span className='text-green-600'>Terms and Conditions| Tariffs| Interest| Rates| Info| Centre| Downloads| Info Security| Cost of Credit| </span> Copyright © 2023 XFLIR. All rights reserved. Designed by Onkundi Felix </p>

    </div>

    </div>
  )
}

export default Footer