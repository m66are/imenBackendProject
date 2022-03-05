import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cvsRouter from "./routes/cvs_route";
const app = express();
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use('/cv', cvsRouter);


const mongoUrl = "mongodb+srv://imen:imenMongoAtlas@cluster0.2ncad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUrl).then(() => {
    console.log("DB connected 🐤");
    app.listen(8080, () => {
        console.log("Server runing on port 8080 🐱");
    })
}).catch((error) => console.log("Error : " + error))