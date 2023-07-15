import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const app = express()

app.use("/games", express.static(path.join(__dirname, 'games')))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})