import React from 'react'

const SplashScreen = ({logo, title}) => {

    const s = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff'
        },
        title: {
            fontWeight: '600',
            fontSize: '1rem'
        },
        logo: {
            width: 96,
            height: 96
        }
    }

    return (
        <div style={s.container}>
            {logo && <img src={logo} alt='' style={s.logo} />}
            {title && <p style={s.title}>{title}</p>}
        </div>
    )
}

export default SplashScreen