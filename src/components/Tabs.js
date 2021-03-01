import React, { useState } from 'react'

const Tabs = ({tabs = [], selected, onChange}) => {

    const [active, setActive] = useState(selected === undefined ? tabs[0] : selected )

    const s = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'scroll',
            paddingLeft: '20px',
            paddingBottom: '10px'
        },
        tab: {
            marginRight: '50px',
            paddingRight: '20px',
            fontSize: '1rem',
            color: '#a5a5a5'
        },
        tabActive: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '50px',
            paddingRight: '20px',
            fontWeight: '700',
            fontSize: '1rem'
        },
        marker: {
            display: 'block',
            width: '5px',
            height: '5px',
            backgroundColor: 'violet',
            borderRadius: '2.5px',
            marginRight: '10px'
        }
    }

    function _onClickTab(tab) {
        setActive(tab)
        onChange && onChange(tab.id)
    }

    return (
        <div style={s.container}>
            {tabs.map(tab => {
                return <p key={tab.id} style={active === tab ? s.tabActive : s.tab} onClick={() => {_onClickTab(tab)}}>{active === tab && <li style={s.marker}/>}{tab.title}</p>
            })}
        </div>
    )
}

export default Tabs