import React from 'react'

const Empty = ({icon, text}) => {

    const s = {
        container: {
            alignItems: 'center',
            backgroundColor: '#efefef',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
        },
        content: {
            color: '#000000',
        }
    }

    return (
        <div style={s.container}>
            <div style={s.content}>
                <p style={s.text}>
                    {text || 'Empty...'}
                </p>
            </div>
        </div>
    )
}

export default Empty