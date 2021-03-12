import React, { Fragment, useEffect, useState } from 'react'
import './App.css'
import db from './db.js'
import SplashScreen from './components/SplashScreen'
import MainScreen from './MainScreen'

function App() {

  const [isLoading, setLoading] = useState(true)
  const [aList, setAList] = useState([])
  
  
  useEffect(() => {
    loadData()
  }, [])
  
  async function loadData() {
    await db.initConnection()
    const mList = await db.getMAthletes()
    const wList = await db.getWAthletes()
    setAList([mList, wList])
    setLoading(false)
  }

  return (
    <Fragment>
      {isLoading ? 
        <SplashScreen title={'Leaderboards'}/>
        :
        <MainScreen aList={aList}/>
      }
    </Fragment>
  )
  
}

export default App;