import e from "express";
import "dotenv/config";

const app = e();
app.use(e.json());

import rt_movie from "./routes/movie.js";
app.use("/movie", rt_movie);

import rt_user from "./routes/user.js";
app.use("/user", rt_user);


app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});