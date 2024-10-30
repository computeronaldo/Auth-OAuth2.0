const express = require("express");
const app = express();

const authRouter = require("./routes/authRouter");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

require("./models/dbConnection");

app.use(cors());
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
