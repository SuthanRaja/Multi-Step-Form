import React from 'react'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Summary = () => {
    const { selectedPlan, isYearly, selectedAddons } = useSelector((state) => state.togglePlan);
    const navigate = useNavigate();

    const plans = {
        Arcade: isYearly ? 90 : 9,
        Advanced: isYearly ? 120 : 12,
        Pro: isYearly ? 150 : 15
    };
    const addonPrices = {
        'Online service': isYearly ? 10 : 1,
        'Larger storage': isYearly ? 20 : 2,
        'Customizable profile': isYearly ? 20 : 2
    };

    const handleNext = () => {
        navigate('/thankyou'); 
    };

    const handleBack = () => {
        navigate('/addons'); 
    };

    const total = (plans[selectedPlan] || 0) + selectedAddons.reduce((sum, addon) => sum + (addonPrices[addon] || 0), 0);

    const handleChangePlan = () => {
        navigate('/selectplan');
    };

    return (
        <div className='m-10'>
            <p className='text-3xl text-blue-950 font-bold'>Finishing up</p>

            <div className='my-8  rounded-md p-4  bg-slate-300'>
                <div className='flex justify-between my-6  '>
                    <span><p className='text-blue-950 font-bold text-md'>{selectedPlan} ({isYearly ? 'Yearly' : 'Monthly'})</p>
                    <p className='text-sm underline text-gray-500 cursor-pointer' onClick={handleChangePlan}>Change</p></span>

                    <p className='text-blue-950 font-bold text-md'>${plans[selectedPlan]}/{isYearly ? 'yr' : 'mo'}</p>
                </div>
                <div className='border-t-2 border-gray-500 my-4'/>
                {selectedAddons.map((addon) => (
                    <div key={addon} className='flex justify-between my-2'>
                        <p className='text-sm  text-gray-500'>{addon}</p>
                        <p className='text-sm'>+${addonPrices[addon]}/{isYearly ? 'yr' : 'mo'}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-between m-4 '>
                <p className='text-sm  text-gray-500'>Total ({isYearly ? 'per year' : 'per month'})</p>
                <p className='text-violet-600 font-bold text-xl'>${total}/{isYearly ? 'yr' : 'mo'}</p>
            </div>

            <div className='flex justify-between mt-10'>
                <Button variant='ghost' onClick={handleBack}>Go Back</Button>
                <Button variant='confirm' onClick={handleNext}>Confirm</Button>
            </div>
        </div>
    )
}

export default Summary
