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
        container: (place) => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: place === '1' ? 'rgba(255, 215, 0, 0.25)' : place === '2' ? 'rgba(192, 192, 192, 0.45)' : place === '3' ? 'rgba(205, 125, 50, 0.25)' : '#ffffff',
            borderRadius: '7px',
            marginBottom: '7px',
            padding: '5px 0',
            boxShadow: '1px 1px 10px rgba(0,0,0,0.05)'
        }),
        place: {
            width: '36px',
            margin: '0',
            fontSize: '0.75rem',
            fontWeight: '400',
            textAlign: 'center'
        },
        avatarContainer: {
            width: '45px',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        avatar: {
            width: '35px',
            height: '35px',
            borderRadius: '7px',
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
        subnameBlock: (place) => ({
            display: 'flex',
            fontSize: '.65rem',
            color: place === '1' || place === '2' || place === '3' ? '#323232' : '#b1b1b1'
        }),
        subnameCity: {
            margin: '0'
        },
        subnameClub: {
            margin: '0'
        },
        points: {
            width: '36px',
            margin: '0',
            fontWeight: '400',
            textAlign: 'center'
        }
    }

    function _onClick() {
        onClick && onClick()
    }

    return (
        <div style={s.container(item.place || item.id)} onClick={_onClick}>
            <p style={s.place}>{item.place || item.id}</p>
            <div style={s.avatarContainer}>
                <img style={s.avatar} alt='' src='https://w7.pngwing.com/pngs/72/42/png-transparent-vkontakte-social-networking-service-account-user-facebook-anonymous-mask-miscellaneous-blue-people.png'/>
            </div>
            <div style={s.nameBlock}>
                <p style={s.name}>{item.name}</p>
                <span style={s.subnameBlock(item.place || item.id)}>
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