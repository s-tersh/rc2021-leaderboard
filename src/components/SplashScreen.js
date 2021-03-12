import React from 'react'

const SplashScreen = ({logo, title = 'React App'}) => {

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
        }
    }

    return (
        <div style={s.container}>
            <div>
                {logo && <img src={logo} alt=''/>}
                <p style={s.title}>{title}</p>
            </div>
        </div>
    )
}

export default SplashScreen