import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { setPersonalInfo } from '../Redux/Slices/toggleSlice';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.number().required('Phone number is required'),
    }),
    onSubmit: (values) => {
      dispatch(setPersonalInfo(values));
      navigate('/selectplan');
    },
  });

  return (
    <div className='m-10'>
      <p className='text-3xl text-blue-950 font-bold'>Personal info</p>
      <p className='text-sm font-extralight text-gray-500 my-2'>
        Please provide your name, email address, and phone number.
      </p>

      <form className='space-y-8 mt-8' onSubmit={formik.handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="e.g. Stephen King"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Email Address</Label>
          <Input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Phone Number</Label>
          <Input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-600 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>
        
        <div className='flex justify-end mt-20'>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
