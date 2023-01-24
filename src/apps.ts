import express from "express";
import morgan from "morgan";
import cors from "cors";
import loginRoutes from "./routes/login.routes";
import personRoutes from"./routes/person.routes"
import categoryRoutes from "./routes/category.routes";
import rolesRouter from "./routes/roles.routes";
import brandRouter from "./routes/brand.routes";
import siceRouter from "./routes/size.routes"


const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use(loginRoutes,personRoutes,rolesRouter,categoryRoutes,brandRouter,siceRouter);

export default app;
