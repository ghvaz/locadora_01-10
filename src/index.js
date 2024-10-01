import e from "express";

const app = e();
app.use(e.json());

app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});