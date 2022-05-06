require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;

const moongoseConect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, ()=>{
            console.log('DB connected')
        })
    } catch (error) {
        console.log(error)
    }
}

moongoseConect();

app.use(express.json());

app.use('/', require('./routes/routes'));





app.listen(PORT, () => {
    console.log(`run on port ${PORT}`)
});