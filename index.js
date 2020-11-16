const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')

const redirectHttps = require('./middleware/redirect-https')
const errorHandler = require('./middleware/error-handler')
const userRoutes = require('./routes/user.routes')
const taskRoutes = require('./routes/task.routes')

const app = express()

const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(redirectHttps)

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/task', taskRoutes)
app.use(errorHandler)

app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))

app.listen(PORT, () => console.log(`Executando na Porta: ${PORT}`))
