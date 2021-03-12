import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentinals from './credentinals.js'

function Athlete(id, name, city, club, gender, points, events, avatar) {
    this.id = id
    this.name = name
    this.city = city
    this.club = club
    this.gender = gender
}

const doc = new GoogleSpreadsheet(credentinals.sheet_id)

const initConnection = async() => {
    try {
        await doc.useServiceAccountAuth({
            client_email: credentinals.client_email,
            private_key: credentinals.private_key,
        })
    } catch (e) {
        console.error('Error: ', e)
    }
}

const getSheet = async(name) => {
    await doc.loadInfo()
    return doc.sheetsByTitle[name]
}

const getAthletes = async(gender) => {
    const sheet = await getSheet(gender)
    const rows = await sheet.getRows()
    const athletes = rows.map(row => {
        return new Athlete(row['№'], row['ФИО'], row['Город'], row['Клуб'] === undefined ? 'Без клуба' : row['Клуб'], 'w')
    })
    return athletes
}

const getWAthletes = async() => {
    return await getAthletes('W')
}

const getMAthletes = async() => {
    return await getAthletes('M')
}

const db = {
    initConnection,
    getWAthletes,
    getMAthletes
}

export default db