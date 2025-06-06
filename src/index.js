const express = require('express');
const estudantesRoutes = require('./routes/estudantesRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use('/estudantes', estudantesRoutes)

app.listen(port, () => {
    console.log("Aplicação rodando...")
})