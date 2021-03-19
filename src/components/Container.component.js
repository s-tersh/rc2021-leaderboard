import React, { useEffect } from 'react'

const Container = () => {
    
    const containerRef = React.createRef()

    
    useEffect(() => {
        console.log(containerRef.current.parentElement)
    }, [])

    return (
        <div ref={containerRef} style={{backgroundColor: '#efefef'}}> 1 </div>
    )
}

export default Container