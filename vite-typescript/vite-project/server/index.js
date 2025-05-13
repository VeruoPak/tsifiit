import express from "express";
import cors from "cors";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

let dataSource = [];

app.post("/data", (req, res) => {
  const newData = req.body;
  dataSource.push(newData);

  res.status(201).json(newData);
});

app.get("/api/data", (req, res) => {
  res.json({ title: "Хлеб ржаной", descriptipon: "Хлебобулочное изделие", cost: "100" });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
