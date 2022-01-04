// console.log("Hellow Node");
const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
const format = require('date-format')

app.get('/', (req, res)=>{
    res.status(200).send('Hello world')
})

app.get('/api/v1/instagram',(req, res)=>{
    const instaSocial = {
        username : "jabidabdul",
        followers : 200,
        follows : 20,
        date : format.asString("dd MM  - hh:mm:ss", new Date())
    }
    res.status(200).json({instaSocial});
})

app.get('/api/v1/facebook', (req, res)=>{
    const instaSocial = {
        username : "jabidabdul",
        followers : 234,
        follows : 20,
        date : format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    res.status(200).json({instaSocial});
})

app.get('/api/v1/linkedin', (req, res)=>{
    const instaSocial = {
        username : "jabidabdul",
        followers : 2354434,
        follows : 240,
        date : format.asString("dd[MM] - hh:mm:ss", new Date())

    }
    res.status(200).json({instaSocial});
})

app.get('/api/v1/:token/:id', (req, res)=>{
    const token = req.params.token;
    const id = req.params.id;
    res.send({params : {token : token , id : id}});
})


app.listen(PORT, (req, res)=>{
    console.log(`Server runs in the port: ${PORT}`)
})