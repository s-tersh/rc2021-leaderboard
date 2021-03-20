import React, { useEffect, useState } from 'react'
import './App.css'
import SplashScreen from './components/SplashScreen.component'
import MainScreen from './MainScreen'

function App() {

  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    initData()
  }, [])

  function initData() {
    setLoading(false)
  }

  return (
    <>
      {isLoading ?
        <SplashScreen logo={process.env.PUBLIC_URL + '/icons/icon-192x192.png'}/>
        :
        <MainScreen/>
      }
    </>
  )
  
}

export default App;