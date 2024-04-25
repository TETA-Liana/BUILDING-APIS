const express=require('express');
const app=express();

const genres=require('./routes')
app.use(express.json());
const genres=[
    {id:1,name:"horror"},
    {id:2,name:"action"},
    {id:3,name:"romances"},
];

const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));