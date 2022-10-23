import express from "express";
import routes from './routes/index.routes';
import path from 'path';
import { create } from 'express-handlebars';


const app = express()

//Views
app.set("views" , path.join(__dirname , "/views"));

//Handlebars Config
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})
//Handlebars invoke
app.engine(".hbs", hbs.engine);

//Handlebar set
app.set("view engine",".hbs");

//Routes
app.use(routes);

export default app;
