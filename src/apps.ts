import express from "express";
import morgan from "morgan";
import cors from "cors";
import loginRoutes from "./routes/login.routes";
import personRoutes from"./routes/person.routes"
import categoryRoutes from "./routes/category.routes";
import rolesRouter from "./routes/roles.routes";

import colorRouter from "./routes/color.routes";

import brandRouter from "./routes/brand.routes";
import siceRouter from "./routes/size.routes"
import providerRouter from "./routes/provider.routes";
<<<<<<< HEAD
import paymentmethodRouter from "./routes/paymentmethod.routes";
=======
import styleRouter from "./routes/style.routes";

>>>>>>> a37c3c97921a543b2f83724f6863e81f976705ac


const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());


<<<<<<< HEAD
app.use(loginRoutes,personRoutes,rolesRouter,categoryRoutes,brandRouter,siceRouter,colorRouter,providerRouter,paymentmethodRouter);
=======
app.use(loginRoutes,personRoutes,rolesRouter,categoryRoutes,brandRouter,siceRouter,colorRouter,providerRouter,styleRouter);
>>>>>>> a37c3c97921a543b2f83724f6863e81f976705ac

export default app;
