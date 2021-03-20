import React, { useEffect, useState } from 'react'
import ListView from './components/ListView.component'
import Dropdown from './components/DropDown.component'
import Tabs from './components/Tabs.component'
import Blackout from './components/Blackout.component'
import GSheet from './GSheet'
import './App.css'
import Empty from './components/Empty.component'

const MainScreen = () => {

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [active, setActive] = useState({gender: 'M', ev: 'A'})
  
  const tabsEvent = [
    {id: 'A', title: 'Атлеты'},
    {id: 'Result', title: 'Итог'},
    {id: '21.1', title: '21.1'},
    {id: '21.2', title: '21.2'},
    {id: '21.3', title: '21.3'},
    {id: '21.4', title: '21.4'}
  ]
  
  const optionsGender = [
    {id: 'M', title: 'Парни'},
    {id: 'W', title: 'Девушки'}
  ]
  
  const s = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    },
    topSection: {
      height: '117px'
    },
    appBar: {
      // position: 'fixed',
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
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }
  }

  async function getActiveData(gender, ev) {
    setLoading(true)
    const tableName = `${gender}${ev}`
    const sheets = new GSheet('2PACX-1vSy6xfq8E1xlnkIBLB3T3WwkUsyKdfaBmNYfvpBxsZ1dImDUQHLiMrBAFHN8KxhGZEElhVbGArSFeLX')
    await sheets.getTable(tableName).then(data => {
      setData(data)
      setLoading(false)
    })
  }

  async function _onChangeGender(id) {
    setActive({gender: optionsGender[id].id, ev: active.ev})
    getActiveData(optionsGender[id].id, active.ev)
  }

  async function _onCangeEvent(id) {
    setActive({gender: active.gender, ev: tabsEvent[id].id})
    getActiveData(active.gender, tabsEvent[id].id)
  }

  function _onClickAthlete(id) {
    
  }

  useEffect(() => {
    const initPage = {gender: 'M', ev: 'A'}
    getActiveData(initPage.gender, initPage.ev)
  }, [])

  return (
    <div style={s.container}>
      <Blackout active={isLoading} disabled><p>Обновляем данные ...</p></Blackout>
      <div style={s.topSection}>
        <div style={s.appBar}>
          <p style={s.header}>Roockie Challenge 2021</p>
          <Dropdown options={optionsGender} textAlign='center' onChange={_onChangeGender}/>
        </div>
        <Tabs tabs={tabsEvent} selected={tabsEvent[0]} onChange={_onCangeEvent}/>
      </div>
      <div style={s.bottomSection}>
        {data ?
          <ListView item items={data.rows} onClickItem={_onClickAthlete}/>
          :
          <Empty text='Данных пока нет' />
        }
      </div>
    </div>
  )
}

export default MainScreen;