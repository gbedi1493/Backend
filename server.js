const express=require('express');
const app=express();
const mongoose=require('mongoose');
const ProModel=require('./Model/User');

app.use(express.json());

const uri = "mongodb+srv://garima:garima@cluster0.95epjcu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log(`Database connect ho gya`))
.catch(()=>console.log(`Tumse na ho payega`))

app.get('/',(req,res)=>{
    res.send("This is my first backend project");
})

app.get('/profile',(req,res)=>{
    res.send("This is my profile page");
})

app.post('/register',(req,res)=>{
    const inputdata=req.body;
    ProModel.create(inputdata);
    res.send("User Created");
})

app.get('/read',async(req,res)=>{
    const alldocs=await userData.find({});
    res.send(alldocs);
})

app.patch('/update/:user_name',async(req,res)=>{
    const hi=req.params.user_name;
    const updatedData=req.body;
    const updatedName=await ProModel.findOneAndUpdate(
        {name:hi},
        {$set:updatedData},
        {new:true}
    )
    if(!updatedName){
        return res.status(404).json({message:"User sahi likho"});
    }
    res.status(202).json(updatedName);
  })
  
  app.delete('/delete/:user_name',async(req,res)=>{
    const hi=req.params.user_name;
    const deletedName=await ProModel.findOneAndDelete({name:hi})
    if(!deletedName){
        return res.status(404).json({message:"User sahi likho"});
    }
    res.status(202).json(deletedName);
  })

app.listen(3000,()=>{
    console.log("Server started");
})