
import Navbar from './components/Navbar'
import LoginContainer from './components/LoginContainer'
import {Route, Routes } from 'react-router-dom'

import Stage2 from './components/Stage2'
import Stage1 from './components/Stage1'
import Stage3 from './components/Stage3'
import Stage4 from './components/Stage4'
import Chatbot from './components/Chatbot.jsx'
import Chatbutton from './components/Chatbutton.jsx'



const App = () => {
  return (
    
      
    <div className='flex flex-col items-center gap-20 h-screen'>
      {location.pathname !== '/chatbot' && (
        <>
          <Navbar />
          <Chatbutton />
        </>
      )}
        <div className='background absolute top-0 left-0 w-full h-screen -z-10'>

        </div>
      {/* <LoginContainer/> */} 
        <Routes>
            <Route exact path='/' Component={LoginContainer}/>
            <Route exact path='/Stage1' Component={Stage1}/>
            <Route exact path='/Stage2' Component={Stage2}/>
            <Route exact path='/Stage3' Component={Stage3}/>
            <Route exact path='/Stage4' Component={Stage4}/>
            <Route exact path='/chatbot' Component={Chatbot}/>
        </Routes>
    
      {/* <LoginContainer/> */}
    
    </div>
    
  )
}

export default App
