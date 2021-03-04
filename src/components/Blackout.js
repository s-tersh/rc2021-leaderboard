import React, { Fragment, useState } from 'react'

const Blackout = ({active = false, onClose, children, disabled = false}) => {
    
    const [visible, setVisible] = useState(active)

    const s = {
        container : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: '999'
        }
    }
    
    const _onClick = () => {
        !disabled && setVisible(false)
        !disabled && onClose && onClose()
    }

    return (
        <Fragment>
            {visible &&
                <div style={s.container} onClick={_onClick}>
                    {children}
                </div>
            }
        </Fragment>
    )
}

export default Blackout