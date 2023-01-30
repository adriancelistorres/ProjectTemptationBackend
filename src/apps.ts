import express from "express";
import morgan from "morgan";
import cors from "cors";
import loginRoutes from "./routes/login.routes";
import personRoutes from"./routes/person.routes";
import categoryRoutes from "./routes/category.routes";
import rolesRouter from "./routes/roles.routes";
import colorRouter from "./routes/color.routes";
import brandRouter from "./routes/brand.routes";
import siceRouter from "./routes/size.routes"
import providerRouter from "./routes/provider.routes";
import paymentmethodRouter from "./routes/paymentmethod.routes";
<<<<<<< HEAD
import incomeRouter from "./routes/income.routes";
=======
import orderRouter from "./routes/order.routes";
import saledetailRouter from "./routes/saledetail.routes"

>>>>>>> ded113645aa8569f02dfb285275a917230fb4ada

import styleRouter from "./routes/style.routes";



const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());




<<<<<<< HEAD
app.use(loginRoutes,personRoutes,rolesRouter,categoryRoutes,brandRouter,siceRouter,colorRouter,providerRouter,styleRouter,paymentmethodRouter,incomeRouter);
=======
app.use(loginRoutes,personRoutes,rolesRouter,categoryRoutes,brandRouter,siceRouter,colorRouter,providerRouter,styleRouter,paymentmethodRouter,orderRouter,saledetailRouter);
>>>>>>> ded113645aa8569f02dfb285275a917230fb4ada


export default app;
