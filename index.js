const express=require('express'); // here we have imported express module

const app=express();  // we created one variable that calls this express function

app.use(express.static('public'))

app.listen(1000,()=>{                          // we provided a port number with a static callback function 
    console.log("server is started"); 
})
