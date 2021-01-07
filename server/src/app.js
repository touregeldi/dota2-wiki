const express = require('express')
const heroReq = require('./utils/heroes')
const path = require('path')

const app = express()
const port = process.env.PORT || 9000;

app.use(express.static(path.join(path.dirname(process.cwd()), 'client/build')));


app.get("/api", (req,res)=>{
    heroReq((error, heroes)=>{
        if(error){
            return res.send({
                error
            })

        }
        res.send(heroes)
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(process.cwd()), 'client/build'));
  });
  

app.listen(port, () => {
    console.log("Server is up on port " + port);
  });