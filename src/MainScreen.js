import React, { useEffect, useState } from 'react'
import Blackout from './components/Blackout.component'
import Dropdown from './components/DropDown.component'
import Empty from './components/Empty.component'
import GSheet from './GSheet'
import './App.css'

const MainScreen = () => {

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const s = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    topSection: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 4px 14px rgba(0,0,0,0.05)',
      height: 90,
      minHeight: 90,
    },
    appTitle: {
      color: 'rgba(217,189,65,1)',
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 28,
      marginTop: 17,
      textAlign: 'center',
      width: '100%',
    },
    bottomSection: {
      backgroundColor: '#f9f9f9',
      flexGrow: 1,
    },
  }

  useEffect(() => {

      getData('MResult')

  }, [])

  async function getData(tableName) {
    setLoading(true)
    const sheets = new GSheet('2PACX-1vSy6xfq8E1xlnkIBLB3T3WwkUsyKdfaBmNYfvpBxsZ1dImDUQHLiMrBAFHN8KxhGZEElhVbGArSFeLX')
    sheets.getTable(tableName, 2).then(res => {
      setData(res.rows)
      setLoading(false)
    })
  }

  function _onChangeGender(id) {
    getData(id === 0 ? 'MResult' : 'WResult')
  }

  return (
    <div style={s.container}>
      <Blackout active={isLoading}><p style={{fontSize: 12, fontWeight: 600}}>Обновляем данные</p></Blackout>
      <div style={s.topSection}>
        <p style={s.appTitle}>ROOKIE CHALLENGE 21</p>
        <Dropdown options={['Парни', 'Девушки']} onChange={_onChangeGender} />
      </div>
      <div style={s.bottomSection}>
        {data.length > 0 ?
          <AthleteList data={data} />
          :
          <Empty icon={process.env.PUBLIC_URL + '/images/empty-box.png'} text='Пока нет записей' />
        }
      </div>
    </div>

  )
}

const AthleteList = ({data}) => {

  const s = {
    listView: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
  }

  return (
    <div style={s.listView}>
      {data.length > 0 &&
        data.map(item => {
          const index = data.indexOf(item)
          return <AthleteItem
            key={index}
            avatar={process.env.PUBLIC_URL + '/images/empty-avatar.png'}
            club={item.cells[2].value}
            e1={{place: item.cells[4].value, points: item.cells[3].value}}
            e2={{place: item.cells[6].value, points: item.cells[5].value}}
            e3={{place: item.cells[8].value, points: item.cells[7].value}}
            e4={{place: item.cells[10].value, points: item.cells[9].value}}
            index={index}
            name={item.cells[1].value}
            place={item.cells[10].value}
            points={item.cells[11].value}
          />
        })
      }
    </div>
  )
}

const AthleteItem = ({avatar, club, e1, e2, e3, e4, name, place, points}) => {

  const [isActive, setActive] = useState(false)
  const color = place === '1' ? 'rgba(255,215,0,1)' : place === '2' ? 'rgba(192,192,192,1)' : place === '3' ? 'rgba(205,125,50,1)' : '#2c2c2c'
  const border = place ===  '1' || place === '2' || place === '3' ? `1px solid ${color}`  : 0

  const s = {
    listItem: (isActive) => ({
      backgroundColor: '#ffffff',
      borderRadius: 10,
      border: border,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
      height: isActive ? 136 : 50,
      marginBottom: 10
    }),
    listItemDataContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
    },
    listItemPlace: {
      color: color,
      fontSize: 10,
      fontWeight: 600,
      textAlign: 'center',
      width: 40,
    },
    listItemAvatar: {
      borderRadius: 5,
      height: 24,
      width: 24,
    },
    listItemTextBlock: {
      flexGrow: 1,
      paddingLeft: 10,
    },
    listItemTextBlockName: {
      color: '#2c2c2c',
      fontSize: 12,
      fontWeight: 600,
      margin: 0,
    },
    listItemTextBlockClub: {
      color: '#2f2f2f',
      fontSize: 10,
      margin: 0,
    },
    listItemPoints: {
      color: color,
      fontSize: 12,
      fontWeight: 600, 
      marginRight: 15, 
      textAlign: 'right',
    },
    divider: {
      margin: 0,
    },
    listItemDetailBlock: {
      display: 'flex',
      flexDirection: 'column',
      height: 84,
      justifyContent: 'center',
      marginLeft: 74
    },
    listItemDetailBlockItem: {
      color: 'rgba(113,113,113,1)',
      fontSize: 10,
      fontWeight: 600,
      marginTop: 0,
      marginBottom: 5,
    },
  }

  function _onClick() {
    setActive(!isActive)
  }

  return (
    <div style={s.listItem(isActive)} onClick={_onClick}>
      <div style={s.listItemDataContainer}>
        <p style={s.listItemPlace}>#{place}</p>
        <img alt='' src={avatar} style={s.listItemAvatar} />
        <div style={s.listItemTextBlock}>
          <p style={s.listItemTextBlockName}>{name}</p>
          <p style={s.listItemTextBlockClub}>«{club}»</p>
        </div>
        <p style={s.listItemPoints}>{points}</p>
      </div>
      {isActive &&
        <>
          <hr color='#efefef' style={s.divider} />
          <div style={s.listItemDetailBlock}>
            {e1 &&
              <p style={s.listItemDetailBlockItem}>21.1 - {e1.place ? `${e1.place} место` : 'Нет результата'} / {e1.points} баллов</p>
            }
            {e2 &&
              <p style={s.listItemDetailBlockItem}>21.2 - {e2.place ? `${e2.place} место` : 'Нет результата'} / {e2.points} баллов</p>
            }
            {e3 &&
              <p style={s.listItemDetailBlockItem}>21.3 - {e3.place ? `${e3.place} место` : 'Нет результата'} / {e3.points} баллов</p>
            }
            {e4 &&
              <p style={s.listItemDetailBlockItem}>21.4 - {e4.place ? `${e4.place} место` : 'Нет результата'} / {e4.points} баллов</p>
            }
          </div>
        </>
      }
    </div>
  )
}

export default MainScreen;