import React from 'react'
import Navbar from './components/Navbar'
import LoginContainer from './components/LoginContainer'
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import { Router } from 'lucide-react'
import Stage2 from './components/Stage2'
import Stage1 from './components/Stage1'
import Stage3 from './components/Stage3'



const App = () => {
  return (
    
      
    <div className='flex flex-col items-center gap-20 h-screen'>
        <Navbar/>
      {/* <LoginContainer/> */}
        <Routes>
            <Route exact path='/' Component={LoginContainer}/>
            <Route exact path='/Stage1' Component={Stage1}/>
            <Route exact path='/Stage2' Component={Stage2}/>
            <Route exact path='/Stage3' Component={Stage3}/>
        </Routes>
    
      {/* <LoginContainer/> */}
    
    </div>
    
  )
}

export default App
