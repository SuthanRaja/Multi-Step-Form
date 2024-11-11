import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAddon } from '../Redux/Slices/toggleSlice'
import { useNavigate } from 'react-router-dom'

const Addons = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isYearly = useSelector((state) => state.togglePlan.isYearly);
    const selectedAddons = useSelector((state) => state.togglePlan.selectedAddons);

    const data = [
        { service: 'Online service', desc: 'Access to multiplayer games.', bill: isYearly ? '$10/yr' : '+$1/mo' },
        { service: 'Larger storage', desc: 'Extra 1TB of cloud save.', bill: isYearly ? '$20/yr' : '+$2/mo' },
        { service: 'Customizable profile', desc: 'Custom theme on your profile', bill: isYearly ? '$20/yr' : '+$2/mo' },
    ];

    const handleToggleAddon = (addon) => {
        dispatch(toggleAddon(addon)); 
    }

    const handleNext = () => {
        navigate('/summary'); 
    };

    const handleBack = () => {
        navigate('/selectplan'); 
    };

    return (
        <div className='m-10'>
            <p className='text-3xl text-blue-950 font-bold'>Pick add-ons</p>
            <p className='text-sm font-extralight text-gray-500 my-2'>Add-ons help enhance your gaming experience.</p>

            <div>
                {data.map((addon) => (
                    <div
                        key={addon.service}
                        className={`flex items-center justify-between p-4 border my-4 rounded-lg 
                            ${selectedAddons.includes(addon.service) ? 'border-blue-950 bg-slate-300' : 'border-slate-500'}
                            hover:border-blue-950 hover:bg-gray-300`}>
                        
                        <div className='flex mx-4'>
                            <Checkbox
                                checked={selectedAddons.includes(addon.service)}
                                onCheckedChange={() => handleToggleAddon(addon.service)}
                            />
                            <div className='mx-4'>
                                <p className='font-bold text-sm text-blue-950'>{addon.service}</p>
                                <p className='text-gray-500 text-xs font-thin'>{addon.desc}</p>
                            </div>
                        </div>

                        <div className='mx-4 font-thin text-sm text-violet-600'>
                            {addon.bill}
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-between mt-10'>
                <Button variant='ghost' onClick={handleBack}>Go Back</Button>
                <Button onClick={handleNext}>Next Step</Button>
            </div>
        </div>
    )
}

export default Addons
