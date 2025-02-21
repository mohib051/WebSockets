const { Socket } = require('socket.io');
const app = require("./src/app")

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log("user connected")
});
server.listen(3000,()=>{
    console.log("App listening on port 3000")
});

