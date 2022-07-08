const express = require("express"),
  bodyparser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express(),
  facultyRoutes = require("./backend/router/facultyRoutes.js"),
  studentRoutes = require("./backend/router/studentRoutes.js");

//app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });

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
    app.listen(process.env.PORT || 3080, process.env.IP || "localhost", () => {
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
