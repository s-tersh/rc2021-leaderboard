import React, { Fragment, useState } from 'react'
import ListView from './components/ListView.js'
import Dropdown from './components/DropDown.js'
import Tabs from './components/Tabs.js'
import Blackout from './components/Blackout.js'
import './App.css'

const MainScreen = ({aList = []}) => {

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(aList[0])

  const tabsEvent = [
    {id: 5, title: 'Атлеты'},
    {id: 0, title: 'Итог'},
    {id: 1, title: '21.1'},
    {id: 2, title: '21.2'},
    {id: 3, title: '21.3'},
    {id: 4, title: '21.4'}
  ]

  const optionsGender = [
    {id: 0, title: 'Парни'},
    {id: 1, title: 'Девушки'}
  ]

  const s = {
    topSection: {
      height: '67px'
    },
    appBar: {
      position: 'fixed',
      left: '0',
      right: '0',
      backgroundColor: '#fbfbfb',
      paddingBottom: '10px'
    },
    header: {
      textAlign: 'center',
      fontSize: '.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: 'grey'
    },
    bottomSection: {
      height: '70vh - 67px',
    }
  }

  function _onChangeGender(id) {
    setLoading(true)
    setData(aList[id])
    setLoading(false)
  }

  function _onCangeEvent(id) {
    console.log(`Tab is ${id}`)
  }

  function _onClickAthlete(id) {
    console.log(`Item is ${id}`)
  }

  return (
    <Fragment>
      <Blackout active={isLoading} disabled><p>Обновляем данные ...</p></Blackout>
      <div style={s.topSection}>
        <div style={s.appBar}>
          <p style={s.header}>Roockie Challenge 2021</p>
          <Dropdown options={optionsGender} textAlign='center' onChange={_onChangeGender}/>
        </div>
      </div>
      <div style={s.bottomSection}>
        <Tabs tabs={tabsEvent} selected={tabsEvent[0]} onChange={_onCangeEvent}/>
        <ListView item items={data} onClickItem={_onClickAthlete}/>
      </div>
    </Fragment>
  )
}

export default MainScreen;