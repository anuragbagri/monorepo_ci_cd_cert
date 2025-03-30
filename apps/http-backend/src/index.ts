import express from "express";
import {prismaClient } from "@repo/db/client"

const app =express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/signup",async (req,res)=> {
    const {username , password} = req.body;
    const insertUser = await prismaClient.user.create({
        data : {
            username : username,
            password : password
        }
    })
    res.json({
        message : "signup successfull",
        id : insertUser.id,
    })
})

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
