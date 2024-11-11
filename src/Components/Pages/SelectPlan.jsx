import React from 'react';
import { useNavigate } from 'react-router-dom';
import arcadeIcon from '../../assets/icon-arcade.svg';
import advancedIcon from '../../assets/icon-advanced.svg';
import proIcon from '../../assets/icon-pro.svg';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { useDispatch, useSelector } from 'react-redux';
import { setIsYearly, selectPlan } from '../Redux/Slices/toggleSlice';

const SelectPlan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isYearly = useSelector((state) => state.togglePlan.isYearly);
  const selectedPlan = useSelector((state) => state.togglePlan.selectedPlan);

  const plans = [
    { name: 'Arcade', img: arcadeIcon, mon: '$9/mo', year: '$90/yr', text: '2 months free' },
    { name: 'Advanced', img: advancedIcon, mon: '$12/mo', year: '$120/yr', text: '2 months free' },
    { name: 'Pro', img: proIcon, mon: '$15/mo', year: '$150/yr', text: '2 months free' }
  ];

  const handleToggle = () => {
    dispatch(setIsYearly());
  };

  const handleSelectPlan = (plan) => {
    dispatch(selectPlan(plan.name));
  };

  const handleNext = () => {
    navigate('/addons');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='m-10'>
      <p className='text-3xl text-blue-950 font-bold'>Select your plan</p>
      <p className='text-sm font-extralight text-gray-500 my-2'>
        You have the option of monthly or yearly billing.
      </p>

      <div className='flex flex-row gap-4 mt-8'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`w-1/2 h-[10rem] border rounded-lg hover:border-blue-950 hover:bg-slate-300 ${
              selectedPlan === plan.name ? 'border-blue-950 bg-slate-300' : 'border-slate-500'
            }`}
            onClick={() => handleSelectPlan(plan)}
          >
            <div className='m-4'>
              <img src={plan.img} alt={`${plan.name} icon`} className='w-1/3' />
            </div>
            <div className='place-content-end items-end m-4 h-1/2'>
              <div className='text-blue-950 font-bold'>{plan.name}</div>
              <div className='text-sm text-gray-400'>{isYearly ? plan.year : plan.mon}</div>
              {isYearly && <div className='text-xs text-blue-950'>{plan.text}</div>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-2 my-8 gap-3 rounded-md bg-gray-300">
        <p className={`${!isYearly ? ' text-blue-950' : 'text-slate-400'}`}>Monthly</p>
        <Switch checked={isYearly} onCheckedChange={handleToggle} />
        <p className={`${isYearly ? ' text-blue-950' : 'text-slate-400'}`}>Yearly</p>
      </div>

      <div className='flex justify-between mt-10'>
        <Button variant='ghost' onClick={handleBack}>Go Back</Button>
        <Button onClick={handleNext}>Next Step</Button>
      </div>
    </div>
  );
};

export default SelectPlan;
 