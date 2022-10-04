const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const config = require('./config')

const app = express()

app.use(cors()) //will allow client the calls  
app.use(express.json()) //allows server to read json 
app.use(express.urlencoded({ extended: false }))

const port = 3001


app.get("/", async (req, res) => {


    try {
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('select * from task')

        if (!result) result = []

        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})


app.listen(port)