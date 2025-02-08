// import express module
const express=require('express')
const app =express();

app.use(express.json()); // middleware to parse json DataTransfer

// sample user data

let users =[
    
    {   id: 1, 
        "name":"naveed",
        
        "email":"abc@gmail.com"}

];

// get all users

app.get('/users',(req,res)=>{
    res.json(users);
});

//POST -adda new user
app.post('/users',(req,res)=>{
    const newUser ={ id:users.length +1,...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
});

//put update a user
app.put('/users',(req,res)=>{
const user=users.find(u=>u.id===parseInt(req.params.id));
if(!user)return res.status(404).json({ message:"user not found"});

user.name=req.body.name|| user.name;
user.email=req.body.email|| user.email;
res.json(user);
});

//delete-Remove a user
app.delete('/users/:id',(req,res)=>{
    users=users.filter(user=>user.id !==parseInt(req.params.id));
    res.json({message:'User delete'});
});
//start the server
app.listen(8000,()=>console.log("server is running on port 8000"))
