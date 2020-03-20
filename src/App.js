const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3157);

//Middlewares
app.use(express.json());

// importing routes
const transactionRouters = require('./routes/transactionsRoute');
//Route
app.use('/transaction', transactionRouters);

// importing routes
const contactRouters = require('./routes/contactsRoute');
//Route
app.use('/contacts', contactRouters);


app.use('/test', (req, res) => {
  res.send("Test route");
});

//Fallback if actions not found
app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})
