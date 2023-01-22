import express from "express";
import morgan from "morgan";
import cors from "cors";
import loginRoutes from "./routes/login.routes";
import personRoutes from"./routes/person.routes"

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use(loginRoutes,personRoutes);

export default app;
