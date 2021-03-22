import React, { useState } from 'react'
import Icon from './Icon.component'

const Dropdown = ({options = [], initial = 0, onChange}) => {

    const [active, setActive] = useState(initial)
    const [focus, setFocus] = useState(false)

    const s = {
        container: {
            display: 'flex',
            justifyContent: 'center',
        },
        containerActive: {
            color: '#2c2c2c',
            fontSize: 14,
            fontWeight: 600,
        },
        optionsHolder: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        optionsContainer: {
            position: 'absolute',
            backgroundColor: 'white',
            padding: '5px 50px',
            margin: '10px auto 0 auto',
            borderRadius: '7px',
            boxShadow: '1px 1px 10px rgba(0,0,0,0.05)'
        },
        option: (isActive) => ({
            margin: '15px 0',
            fontSize: '0.85rem',
            fontWeight: isActive ? '600' : '400'
        })
    }

    function _onClickSelect() {
        setFocus(!focus)
    }

    function _onClickOption(index) {
        setActive(index)
        setFocus(false)
        onChange && onChange(index)
    }

    return (
        <div style={s.container}>
            <div onClick={_onClickSelect} style={s.containerActive}>{options[active]}<Icon name='caret-down' size={10}/></div>
            {focus &&
                <div style={s.optionsHolder}>
                    <div style={s.optionsContainer}>
                        {options.map(option => {
                            const index = options.indexOf(option)
                            return <p key={index} style={s.option(active === index)} onClick={() => {_onClickOption(index)}}>{option}</p>
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Dropdown