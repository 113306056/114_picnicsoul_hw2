const express = require('express')
const cors = require('cors')
const app = express()
const port = 3002

app.use(cors())

app.get('/', (req, res) => {
    res.send(`HI`);
})


// http://localhost:3002/person?id=1
app.get('/person', (req, res) => {
    let id = req.query.id;
    console.log(id);

    if(id == "1"){
        res.send({
            name: 'John',
            age: 20,
            city: 'New York'
        });
    }else{
        res.send({
            name: 'Lisa',
            age: 21,
            city: 'Los Angeles'
        });
    }

})

app.post('/message-box', (req, res) => {
    console.log(req.body);
    res.send({
        message: 'Message received'
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
