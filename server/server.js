const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//define routes
app.use("/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
