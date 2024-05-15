import express from "express";

import userRouter from "./routes/user_route.mjs";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8000;


app.use("/", userRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});