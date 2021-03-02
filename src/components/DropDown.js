import React, { useState } from 'react'
import Icon from './Icon'

const Dropdown = ({options = [], textAlign, onChange}) => {

    const [active, setActive] = useState(options[0])
    const [focus, setFocus] = useState(false)

    const s = {
        container: {
            textAlign: textAlign
        },
        optionsHolder: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        optionsContainer: {
            position: 'absolute',
            backgroundColor: 'white',
            padding: '5px 50px',
            margin: '10px auto 0 auto',
            borderRadius: '7px'
        },
        option: {
            margin: '10px 0'
        },
        optionActive: {
            margin: '10px 0',
            fontWeight: '700'
        }
    }

    function _onClickSelect() {
        setFocus(!focus)
    }

    function _onClickOption(option) {
        setActive(option)
        setFocus(false)
        onChange && onChange(option.id)
    }

    return (
        <div style={s.container}>
            <div onClick={_onClickSelect}>{active.title}<Icon name='caret-down' size={10}/></div>
            {focus &&
                <div style={s.optionsHolder}>
                    <div style={s.optionsContainer}>
                        {options.map(option => {
                            return <p key={option.id} style={active === option ? s.optionActive : s.option} onClick={() => {_onClickOption(option)}}>{option.title}</p>
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Dropdown