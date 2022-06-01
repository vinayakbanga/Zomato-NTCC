import express from "express";

const zomato = express();

zomato.get("/",(req,res)=> {
    res.json({messagr:"setupsucess"})
})



zomato.listen(4000,()=> console.log("server is up"));