import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import PersonalInfo from './Components/Pages/PersonalInfo'
import SelectPlan from './Components/Pages/SelectPlan'
import Addons from './Components/Pages/Addons'
import Summary from './Components/Pages/Summary'
import Thankyou from './Components/Pages/Thankyou'

const App = () => {
  return (
   <BrowserRouter>
   <div className='flex w-[50rem] h-[35rem] rounded-xl shadow-2xl'>
      <Navbar/>
      <div className='flex-1 p-4'>
      <Routes>
        <Route path='/' element={<PersonalInfo/>}/>
        <Route path='/selectplan' element={<SelectPlan/>}/>
        <Route path='/addons' element={<Addons/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>

      </Routes>
      </div>
    </div>  
   </BrowserRouter>
  )
}

export default App

