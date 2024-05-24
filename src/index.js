import express from "express";
import { PORT } from "./config";
import usersRouter from "./routes/users.routes";


const app = express();

app.use("/users", usersRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
