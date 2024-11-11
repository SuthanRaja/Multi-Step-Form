import React from 'react'
import Thankyouicon from '../../assets/icon-thank-you.svg'
import { useSelector } from 'react-redux'

const Thankyou = () => {

    const personalInfo = useSelector((state) => state.togglePlan);
     

    console.log(JSON.stringify(personalInfo));

    return (
        <div className='flex flex-col justify-center items-center h-full mx-14 space-y-4'>
            <div className=''>
            <img src={Thankyouicon} alt="thankyouIcon" /> 
            </div>
            <p className='text-3xl text-blue-950 font-bold'>Thank you!</p>
            <p className='text-sm text-gray-400 text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>

         </div>
    )
}

export default Thankyou
