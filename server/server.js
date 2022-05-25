const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/get-categories", (req, res) => {
  try {
    const data = fs.readFileSync("categories.json", "utf8");
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.get("/get-items", (req, res) => {
  try {
    const data = fs.readFileSync("items.json", "utf8");
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.post("add-item", (req, res) => {
  const newItem = { req: { body } };
  newItem.id = Math.floor(Math.random() * 100000000);

  try {
    const oldData = fs.readFileSync("items.json", "utf8");
    fs.writeFileSync("/Users/joe/test.txt", { ...oldData, newItem });
    const newData = fs.readFileSync("items.json", "utf8");
    res.status(200).json(JSON.parse(newData));
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.listen(port, console.log(`Server is running on port ${port}`));
