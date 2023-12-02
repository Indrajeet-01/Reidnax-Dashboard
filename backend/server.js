import express from 'express'

import cors from 'cors'
import bodyParser from 'body-parser'

import userRoutes from './routes/User.js'
import analyticsDataRoutes from './routes/AnalyticsData.js'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', userRoutes)
app.use('/', analyticsDataRoutes)

app.listen(8500, ()=>{
    console.log("server is running!")
})