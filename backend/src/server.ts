import app from './app'
import database from './database'

database.sync({force: true})
console.log('Ha Ha Welcome to database my Lord, running at 3306')

app.listen(3000)
console.log('Good night my own! I am running at 3000')
