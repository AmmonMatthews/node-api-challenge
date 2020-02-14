const express = require('express');

const actionsRouter = require('./routers/actionsRouter.js');
const projectRouter = require('./routers/projectRouter.js');

const server = express();


server.use(express.json());
server.use(logger);
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) =>{
    res.send('lets write some routes')
})

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.originalUrl} `)
  
    next();
  }


module.exports = server