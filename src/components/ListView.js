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
            padding: '10px 0',
            boxShadow: '1px 1px 10px rgba(0,0,0,0.05)'
        },
        place: {
            width: '40px',
            fontSize: '0.75rem',
            fontWeight: '400',
            textAlign: 'center'
        },
        avatarContainer: {
            width: '50px',
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
            fontSize: '0.85rem',
            fontWeight: '600',
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
            width: '50px',
            fontWeight: '400',
            textAlign: 'center'
        }
    }

    function _onClick() {
        onClick && onClick()
    }

    return (
        <div style={s.container} onClick={_onClick}>
            <p style={s.place}>{item.place || item.id}</p>
            <div style={s.avatarContainer}>
                <img style={s.avatar} alt='' src='https://w7.pngwing.com/pngs/72/42/png-transparent-vkontakte-social-networking-service-account-user-facebook-anonymous-mask-miscellaneous-blue-people.png'/>
            </div>
            <div style={s.nameBlock}>
                <p style={s.name}>{item.name}</p>
                <span style={s.subnameBlock}>
                    {/* <p style={s.subnameCity}>{item.city}</p> */}
                    {/* <p style={s.subnameClub}>, </p> */}
                    <p style={s.subnameClub}>«{item.club}»</p>
                </span>
            </div>
            <p style={s.points}>{item.points || 0}</p>
        </div>
    )
}

export default ListView