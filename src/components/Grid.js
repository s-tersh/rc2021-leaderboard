import React from 'react'

const Grid = ({columnsCount, children = []}) => {

    const columns = columnsCount || children.length

    const s = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: columns === children.length ? 'nowrap' : 'wrap',
            padding: '0 20px'
        },
        column: {
            width: `${100 / columns}%`,
        },
        columnContent: {
            textAlign: 'center',
            backgroundColor: "#ffffff",
            margin: '0 5px'
        },
        firstColumnContent: {
            textAlign: 'center',
            backgroundColor: "#ffffff",
            margin: '0 5px 0 0'
        },
        lastColumnContent: {
            textAlign: 'center',
            backgroundColor: "#ffffff",
            margin: '0 0 0 5px'
        },
    }

    return (
        <div style={s.container}>
            {children.map(column => {
                const index = children.indexOf(column)
                const isFirst = index % columns === 0  
                const isLast = index % columns === columns - 1  
                return <div key={column.id} style={s.column}>
                    <div style={isFirst ? s.firstColumnContent : isLast ? s.lastColumnContent : s.columnContent}>{index % columns}</div>
                </div>
            })}
        </div>
    )
}

const Column = () => {
    return (
        <div></div>
    )
}

export default Grid