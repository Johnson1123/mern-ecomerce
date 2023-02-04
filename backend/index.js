import express from 'express'
import cors from 'cors'

import { slides } from './slide.js'
import { categories } from './category.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/slide", (req, res) => {
    res.send(slides);
})
app.get("/category", (req, res) => {
    res.send(categories);
})

app.listen(5000, console.log("Backend Started at port 5000"));