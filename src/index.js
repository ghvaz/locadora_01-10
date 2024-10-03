import e from "express";
import "dotenv/config";

const app = e();
app.use(e.json());

import rt_movie from "./routes/movie.js";
app.use("/movie", rt_movie);



app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});