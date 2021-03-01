import React, { useState } from 'react'

const Dropdown = ({options = [], textAlign, onChange}) => {

    const [active, setActive] = useState(options[0])
    const [focus, setFocus] = useState(false)

    const s = {
        container: {
            textAlign: textAlign
        },
        optionsContainer: {
            backgroundColor: 'white',
            padding: '5px 0',
            marginTop: '20px'
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
        setFocus(true)
    }

    function _onClickOption(option) {
        setActive(option)
        setFocus(false)
        onChange && onChange(option.id)
    }

    return (
        <div style={s.container}>
            <div onClick={_onClickSelect}>{active.title}</div>
            {focus &&
                <div style={s.optionsContainer}>
                    {options.map(option => {
                        return <p key={option.id} style={active === option ? s.optionActive : s.option} onClick={() => {_onClickOption(option)}}>{option.title}</p>
                    })}
                </div>
            }
        </div>
    )
}

export default Dropdown