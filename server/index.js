require("dotenv").config();
const express = require("express");
const app = express();
const AuthRoutes = require("./Routes/AuthRoutes");
const login = require("./Routes/loginRoute");
const MiddleWare = require("./middleware/authMiddleware");
const DB = require("./config/db");
const cors = require("cors");

const PORT = 5000;
DB();
app.use(cors());
app.use(express.json());
app.use("/login", login);
app.use("/auth", AuthRoutes);

app.use("/protected", MiddleWare, (req, res) => {
  res.send("welcome to the tech world");
});

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.listen(PORT, () => {
  console.log("server is running in the port :", PORT);
});
