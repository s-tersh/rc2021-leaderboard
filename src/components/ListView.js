import React from 'react'

const ListView = ({items = [], onClickItem}) => {

    const s = {
        container: {
            padding: '0 20px'
        }
    }

    function _onClickItem(id) {
        onClickItem && onClickItem(id)
    }

    return (
        <div style={s.container}>
            {items.map(item => {
                return <ListItem key={item.id} item={item} onClick={() => {_onClickItem(item.id)}}/>
            })}
        </div>
    )
}

const ListItem = ({item = {}, onClick}) => {

    const s = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: '7px',
            marginBottom: '10px',
            padding: '10px 15px',
            boxShadow: '1px 1px 10px rgba(0,0,0,0.05)'
        },
        place: {
            width: '25px',
            fontWeight: '700'
        },
        avatar: {
            width: '35px',
            height: '35px',
            borderRadius: '35px',
            backgroundColor: 'blue',
            marginRight: '15px'
        },
        nameBlock: {
            flexGrow: '1',
        },
        name: {
            fontWeight: '700',
            margin: '0'
        },
        subnameBlock: {
            display: 'flex',
            fontSize: '.65rem',
            color: '#b1b1b1'
        },
        subnameCity: {
            margin: '0'
        },
        subnameClub: {
            margin: '0'
        },
        points: {
            fontWeight: '700'
        }
    }

    function _onClick() {
        onClick && onClick()
    }

    return (
        <div style={s.container} onClick={_onClick}>
            <p style={s.place}>{item.place}</p>
            <img style={s.avatar} alt='' src='https://w7.pngwing.com/pngs/72/42/png-transparent-vkontakte-social-networking-service-account-user-facebook-anonymous-mask-miscellaneous-blue-people.png'/>
            <div style={s.nameBlock}>
                <p style={s.name}>{item.lastname} {item.name}</p>
                <span style={s.subnameBlock}><p style={s.subnameCity}>{item.city}</p><p style={s.subnameClub}>, «{item.club}»</p></span>
            </div>
            <p style={s.points}>{item.points}</p>
        </div>
    )
}

export default ListView