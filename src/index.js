import express from "express";
import { PORT } from "./config.js";
import usersRouter from "./routes/users.routes.js";


const app = express();

app.use("/users", usersRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
