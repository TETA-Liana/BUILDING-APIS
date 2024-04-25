const express=require('express');
const router=express.Router();
app.get('/api/genres',(req,res)=>{
    res.send(genres);
});
app.get('/api/genres/:id',(req,res)=>{
  const genre=genres.find(g=>g.id===parseInt(req.params.id));
  if(!genre)return res.status(404).send('the genre does not exist');
  res.send(genre);
});
app.post('/api/genres',(req,res)=>{
    const {error}=ValidateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre={
        id:genres.length+1,
        name:req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id',(req,res)=>{
    const genre=genres.find(c=>c.id===parseInt(req.params.id));
    if(!course)return res.status(404).send(error.details[0].message);
    genre.name=req.body.name;
    res.send(genre);
});
function ValidateGenre(genre){
    const schema=joi.object({
        name:joi.string().min(3).required(),
    });
    return schema.validate(genre);

}
app.delete('/api/genres/:id',(req,res)=>{
    const genre=genres.find((g)=>g.id===parseInt(req.params.id));
    if(!course)return res.status(400).send(error.details[0].message);

    const index=genres.indexOf(genre);
    genres.slice(index,1);
    res.send(genre);
});
module.exports=router;