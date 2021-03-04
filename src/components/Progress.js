import React from 'react'

const Bar = ({value = 80, maxValue = 100, color, style}) => {


    const s = {
        container: {
            width: '100%',
            height: '4px',
            backgroundColor: '#efefef',
            borderRadius: '2px',
            overflow: 'hidden',
            margin: '5px 0'
        },
        progress: {
            width: `${(100 / maxValue) * value}%`,
            height: '4px',
            backgroundColor: color || `rgb(100, ${(255 / maxValue) * value}, 100)`
        }
    }
    
    return (
        <div style={s.container}>
            <div style={s.progress}></div>
        </div>
    )
}

export default Bar