
//const mysql = require('mysql2/promise')
//const config = require('./config')
//const db=require('./services/db')
//const todo =require('./services/todo')
const express = require('express')
const cors = require('cors')
const todoRouter=require('./routes/todo')
const app = express()



app.use(cors()) //will allow client the calls  
app.use(express.json()) //allows server to read json 
app.use(express.urlencoded({ extended: false }))
app.use('/', todoRouter)

const port = 3001


app.use((err,req,res,next)=>{


    const statusCode=err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({errror:err.message})
    return
})


app.listen(port)

/*
app.get("/", async (req, res) => {


    try {
        //const connection = await mysql.createConnection(config.db)
        //const [result,] = await connection.execute('select * from task')
        //const result =await db.query('select *from task')

        const result = await todo.getAllTasks()
        if (!result) result = []

        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})

app.post("/new", async (req, res) => {
    try {
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('insert into task (description) values (?)', [req.body.description])
        res.status(200).json({id:result.insertId})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.delete("/delete/:id", async (req, res) => {


    try {
        const connection = await mysql.createConnection(config.db)
       await connection.execute('delete from task where id = ?', [req.params.id])
        res.status(200).json({id:req.params.id})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

*/

