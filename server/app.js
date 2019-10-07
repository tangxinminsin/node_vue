const express = require("express")
const app = express()
// const cors = require('cors')

app.use(require('cors')())
// app.use(cors())
app.use(express.json())

require('./plugins/db.js')(app)
require('./router/admin/index.js')(app)


app.listen(3000,()=>{
    console.log('http://localhost:3000');
})