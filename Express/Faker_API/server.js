const express = require('express')
const {faker} = require('@faker-js/faker')
const app = express()
const port = 5000

// CREATE USER CLASS
const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    }
    return newUser;
}
const newFakeUser = createUser()
console.log(newFakeUser)

// CREATE COMPANY CLASS
const createCompany = () => {
    const newCompany = {
        name: faker.company.companyName(),
        catchPhrase: faker.company.catchPhrase()
    }
    return newCompany;
}
const newFakeCompany = createCompany()
console.log(newFakeCompany)

// -----API ROUTES-----
app.get('/api', (req, res) => {
    res.json({msg: 'Hello'})
})
// NEW USER
app.get('/api/users/new', (req, res) => {
    res.json(newFakeUser)
})
// NEW COMPANY
app.get('/api/companies/new', (req, res) => {
    res.json(newFakeCompany)
})
// NEW COMPANY AND USER
app.get('/api/user/company', (req, res) => {
    res.json({newFakeUser, newFakeCompany})
})
// -----END API ROUTES

app.listen(port, () => console.log(`Server is loaded on port ${port}!`))