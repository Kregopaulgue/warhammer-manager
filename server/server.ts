import express from 'express'
import dotenv from 'dotenv'

const dotenv_config = dotenv.config()
const app = express()

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))