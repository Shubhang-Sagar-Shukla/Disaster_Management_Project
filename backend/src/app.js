import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app= express();
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true, // allow cookies to be sent
    }
));

app.use(express.json({limit:"16kb"}));//to parse json data from request body with a limit of 16kb

app.use(express.urlencoded({extended:true,limit:"16kb"}));//to parse urlencoded data from request body basically sometimes roronoa zoro = roronoa + zoro and all (especially for form data)

app.use(cookieParser())
app.use(express.static("public"));//to serve static files like images, css files, js files etc from public folder

//routes import
import userRouter from './routers/user.routes.js';


//routes declaration
app.use("/api/v1/users",userRouter)


export {app}