const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("ProPanel Backend is running...");
});

app.listen(3000, () => {
    console.log("Backend is running on http://localhost:3000");
});
