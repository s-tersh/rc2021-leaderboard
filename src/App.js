import React, { Fragment, useState } from 'react'
import ListView from './components/ListView.js'
import './App.css'
import Tabs from './components/Tabs.js'
import Dropdown from './components/DropDown.js'

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

  const style = {
    topSection: {
      height: '30vh'
    },
    header: {
      textAlign: 'center',
      fontSize: '.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: 'grey'
    },
    bottomSection: {
      height: '70vh',
    }
  }

  return (
    <Fragment>
      <div style={style.topSection}>
        <p style={style.header}>Roockie Challenge 2021</p>
        <Dropdown options={optionsGender} textAlign='center' onChange={(id) => {console.log(`Gender is ${id}`)}}/>
      </div>
      <div style={style.bottomSection}>
        <Tabs tabs={tabsEvent} selected={tabsEvent[0]} onChange={(id) => {console.log(`Tab is ${id}`)}}/>
        <ListView item items={data} onClickItem={(id) => {console.log(`Item is ${id}`)}}/>
      </div>
    </Fragment>
  )
}

export default App;
