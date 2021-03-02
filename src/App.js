import React, { Fragment, useState } from 'react'
import ListView from './components/ListView.js'
import './App.css'
import Dropdown from './components/DropDown.js'
import Grid from './components/Grid.js'
import Tabs from './components/Tabs.js'

function App() {

  const list = [
    {id: 0, avatar: 'a', name: 'Igor', lastname: 'Natikin', city: 'A-city', club: 'A Club', gender: 'm', events: [{id: 0, title: '21.1', place: 1, points: 100}], points: 100, place: 1},
    {id: 1, avatar: 'b', name: 'Igor', lastname: 'Natikin', city: 'B-city', club: 'B Club', gender: 'm', events: [{id: 0, title: '21.1', place: 2, points: 95}], points: 95, place: 2},
    {id: 2, avatar: 'c', name: 'Igor', lastname: 'Natikin', city: 'C-city', club: 'C Club', gender: 'm', events: [{id: 0, title: '21.1', place: 4, points: 85}], points: 85, place: 4},
    {id: 3, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'D-city', club: 'D Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
    {id: 4, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'E-city', club: 'E Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
    {id: 5, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'F-city', club: 'F Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
    {id: 6, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'G-city', club: 'G Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 10},
    {id: 7, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'H-city', club: 'H Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
    {id: 8, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'I-city', club: 'I Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
    {id: 9, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'J-city', club: 'J Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
    {id: 10, avatar: 'd', name: 'Igor', lastname: 'Natikin', city: 'K-city', club: 'K Club', gender: 'm', events: [{id: 0, title: '21.1', place: 3, points: 90}], points: 90, place: 3},
  ]

  const tabsEvent = [
    {id: 0, title: 'Result'},
    {id: 1, title: '21.1'},
    {id: 2, title: '21.2'},
    {id: 3, title: '21.3'},
    {id: 4, title: '21.4'},
    {id: 5, title: '21.5'},
    {id: 6, title: '21.6'},
    {id: 7, title: '21.7'}
  ]

  const optionsGender = [
    {id: 0, title: 'Mens'},
    {id: 1, title: 'Womens'}
  ]

  const [data, setData] = useState(list)

  const s = {
    topSection: {
      height: '67px'
    },
    appBar: {
      position: 'fixed',
      left: '0',
      right: '0',
      backgroundColor: '#efefef',
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
    console.log(`Gender is ${id}`)
  }

  function _onCangeEvent(id) {
    console.log(`Tab is ${id}`)
  }

  function _onClickAthlete(id) {
    console.log(`Item is ${id}`)
  }

  return (
    <Fragment>
      <div style={s.topSection}>
        <div style={s.appBar}>
          <p style={s.header}>Roockie Challenge 2021</p>
          <Dropdown options={optionsGender} textAlign='center' onChange={_onChangeGender}/>
        </div>
      </div>
      <div style={s.bottomSection}>
        <Grid style={s.lb} columnsCount={3} children={[
          {id: 0},
          {id: 1},
          {id: 2}
        ]}/>
        <Tabs tabs={tabsEvent} selected={tabsEvent[0]} onChange={_onCangeEvent}/>
        <ListView item items={data} onClickItem={_onClickAthlete}/>
      </div>
    </Fragment>
  )
}

export default App;