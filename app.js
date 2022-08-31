const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  http = require("http"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  {Server, Socket} = require("socket.io"),
  facultyRoutes = require("./backend/router/facultyRoutes.js"),
  studentRoutes = require("./backend/router/studentRoutes.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://ibrahim:airforce1@cluster0.buge0.mongodb.net/fms?retryWrites=true&w=majority"
  )
  .then(() => {

    const server = http.createServer(app);

    const io = new Server(server, {
      cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      }
    });

    io.on("connection", (socket) => {
      console.log(`User Connected: ${socket.id}`);
    
      socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
      });
    
      socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
      });
    
      socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
      });
    });



    server.listen(process.env.PORT || 3080, process.env.IP || "localhost", () => {
      console.log(
        `[+] Server started listening on port ${
          process.env.PORT ? process.env.PORT : 3080
        }`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
