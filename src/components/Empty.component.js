import React from 'react'

const Empty = ({icon, text}) => {

    const s = {
        container: {
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
        },
        content: {
            alignItems: 'center',
            color: '#000000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    }

    return (
        <div style={s.container}>
            <div style={s.content}>
                {icon}
                <p style={s.text}>
                    {text || 'Empty...'}
                </p>
            </div>
        </div>
    )
}

export default Empty