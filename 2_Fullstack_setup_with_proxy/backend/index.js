import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api/v1", (req, res) => {
    res.send("API is running...");
});

app.get("/api/v1/recipes", (req, res) => {
    res.send([
        { id: 1, name: "Recipe 1" },
        { id: 2, name: "Recipe 2" },
        { id: 3, name: "Recipe 3" },
    ]);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});