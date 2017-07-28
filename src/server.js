import express from 'express';
import path from 'path';


const app = express();
app.use(express.static('src/Public/js'));


app.get('*',(req, res) =>{
  res.sendFile(path.resolve('src/Public/index.html'));
});


app.listen(process.env.PORT || 3001,()=>console.log("Listening on port 3001"));
