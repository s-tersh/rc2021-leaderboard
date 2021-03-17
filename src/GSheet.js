import axios from 'axios'


// const Sheet = {

//     init: async ({sheetsID, headerRowsCount = 1, onLoad}) => {
//         const url = `https://docs.google.com/spreadsheets/d/e/${sheetsID}/pubhtml?gid=130449334&single=false#`

//         await axios.get(url)
//         .then(res => {
//             const parser = new DOMParser()
//             const doc = parser.parseFromString(res.data, 'text/html')
//             const tables = [...doc.getElementsByTagName('tbody')].map(table => {
//                 const index = [...doc.getElementsByTagName('tbody')].indexOf(table)
//                 const title = [...doc.getElementById('sheet-menu').getElementsByTagName('a')][index].innerText
//                 const rows = [...table.getElementsByTagName('tr')].map(row => {
//                     const rowIndex = [...table.getElementsByTagName('tr')].indexOf(row)
//                     if(rowIndex >= headerRowsCount) {
//                         return new Row(rowIndex, [...row.getElementsByTagName('td')].map(cell => {
//                             const cellIndex = [...row.getElementsByTagName('td')].indexOf(cell)
//                             return new Cell(cellIndex, cell.innerText)
//                         }))
//                     }
//                 })
//                 const cells = rows.map(row => {
//                     if(rows.indexOf(row) >= headerRowsCount) {
//                         return row.cells
//                     }
//                 })

//                 return new Table(
//                     index,
//                     title,
//                     rows,
//                     cells
//                 )
//             })
//             onLoad && onLoad(tables)
//         })
//     },
//     getTable: async ({tableName, headerRowsCount, onLoad}) => {}
// }


class GSheet {
    #url

    constructor(docID) {
        this.#url = `https://docs.google.com/spreadsheets/d/e/${docID}/pubhtml?gid=130449334&single=false#`
    }

    async getTable(tableName, firstRowID = 1) {
        return await this.getTables().then(tables => {
            return tables.find(table => {
                if(table.title === tableName) {
                    const rows = table.rows.slice(firstRowID)
                    table.rows = rows
                    table.cells = rows.map(row => {return row.cells})
                    return table
                }
            })
        })
    }

    async getTables() {
        let tables

        try {
            await axios.get(this.#url)
            .then(res => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(res.data, 'text/html')
    
                tables = [...doc.getElementsByTagName('tbody')].map(table => {
                    const index = [...doc.getElementsByTagName('tbody')].indexOf(table)
                    const title = [...doc.getElementById('sheet-menu').getElementsByTagName('a')][index].innerText
                    const rows = [...table.getElementsByTagName('tr')].map(row => {
                        const rowIndex = [...table.getElementsByTagName('tr')].indexOf(row)
                        return new Row(rowIndex, [...row.getElementsByTagName('td')].map(cell => {
                            const cellIndex = [...row.getElementsByTagName('td')].indexOf(cell)
                            return new Cell(cellIndex, cell.innerText)
                        }))
                    })
                    const cells = rows.map(row => {
                        return row.cells
                    })
    
                    return new Table(
                        index,
                        title,
                        rows,
                        cells
                    )
                })                    
            })
        } catch(e) {
            console.log(e)
        }
        return tables
    }
}

class Table {
    constructor(id, title, rows, cells) {
        this.id = id
        this.title = title
        this.rows = rows
        this.cells = cells
    }
}

class Row {
    constructor(id, cells) {
        this.id = id
        this.cells = cells
    }
}

class Cell {
    constructor(id, value) {
        this.id = id
        this.value = value
    }
}

export default GSheet