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
import incomeRouter from "./routes/income.routes";
import orderRouter from "./routes/order.routes";
import saledetailRouter from "./routes/saledetail.routes";
import detailIncomeRouter from "./routes/detailincome.routes";
import productsRouter from "./routes/products.routes";
import inputRouter from "./routes/input.routes";
import outputRouter from "./routes/output.routes";
import claimRouter from "./routes/claim.routes"
import tuwebaRouter from "./routes/IncomeDetIncome.routes";

import pruebaRouter from"./routes/prueba.routes"

import styleRouter from "./routes/style.routes";
import path from "path";



const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use(loginRoutes,personRoutes,rolesRouter,categoryRoutes,brandRouter,siceRouter,colorRouter,providerRouter,styleRouter,
    paymentmethodRouter,orderRouter,saledetailRouter,incomeRouter,detailIncomeRouter,productsRouter,claimRouter,inputRouter,outputRouter,pruebaRouter,tuwebaRouter);

export default app;
