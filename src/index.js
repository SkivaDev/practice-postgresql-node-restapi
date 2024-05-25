import express from "express";
import { PORT } from "./config.js";
import usersRouter from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/users", usersRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
