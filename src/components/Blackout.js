import React, { Fragment } from 'react'

const Blackout = ({active = false, onClose, children, disabled = false}) => {
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
    
    document.body.style.overflow = active ? 'hidden' : 'auto'

    const _onClick = () => {
        if(!disabled) {
            hideModal()
            onClose && onClose()
        }
    }

    const hideModal = () => {
        active = false
    }

    return (
        <Fragment>
            {active &&
                <div style={s.container} onClick={_onClick}>
                    {children}
                </div>
            }
        </Fragment>
    )
}

export default Blackout