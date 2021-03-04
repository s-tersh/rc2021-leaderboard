import React, { useState } from 'react'

const Tabs = ({tabs = [], initial = 0, onChange}) => {

    const [active, setActive] = useState(initial)

    const s = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'scroll',
            paddingLeft: '20px',
            paddingBottom: '10px'
        },
        tab: (isActive) => ({
            display: 'flex',
            alignItems: 'center',
            marginRight: '30px',
            paddingRight: '20px',
            fontSize: '1rem',
            fontWeight: isActive ? '700' : '400',
            color: !isActive && '#a5a5a5'
        }),
        marker: {
            display: 'block',
            width: '5px',
            height: '5px',
            backgroundColor: 'violet',
            borderRadius: '2.5px',
            marginRight: '10px'
        }
    }

    function _onClickTab(index) {
        setActive(index)
        onChange && onChange(index)
    }

    return (
        <div style={s.container}>
            {tabs.map(tab => {
                const index = tabs.indexOf(tab)
                return <p key={tab.id} style={s.tab(active === index)} onClick={() => {_onClickTab(index)}}>{active === index && <li style={s.marker}/>}{tab.title}</p>
            })}
        </div>
    )
}

export default Tabs