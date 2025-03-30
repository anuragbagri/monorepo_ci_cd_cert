import { WebSocketServer } from "ws";
import {prismaClient} from "@repo/db/client";

const server = new WebSocketServer({
    port : 3001
});

server.on("connection" , async (socket) => {
    const user = await prismaClient.user.create({
        data : {
            username : Math.random.toString(),
            password : Math.random.toString()
        }
    })
    console.log(user);
    socket.send("welcome to the server");
});


