const { response } = require('express');
const express = require('express');
const app = express();

app.get("/", (request,response)=>{
    return response.json({message:"nova mensagem"})
});

app.listen(8000);
