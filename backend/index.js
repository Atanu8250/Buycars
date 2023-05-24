const express = require("express");
const connectDB = require("./config/db");
require('dotenv').config();

const app = express();

app.get('/', async (req, res) => {
     try {
          res.status(200).send({ message: 'Welcome to homepage' });
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({ message: 'Internal server error!', error });
     }
})






// WRONG END-POINT URL
app.use('*', async(req, res) => {
     res.sendStatus(422)
})



app.listen(process.env.PORT || 8080, async () => {
     try {
          console.log(`server running on port ${process.env.PORT || 8080}`);
          console.log('⏳ Databse connecting...');
          await connectDB;
          console.log('✅ Database connected.');
     } catch (error) {
          console.log('❌ error:', error);
     }
})