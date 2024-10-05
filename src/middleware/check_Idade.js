import user from "../controllers/user.js";
import movie from "../controllers/movie.js";

const checkIdade = async function (req, res, next) {

    const id_F = req.body.locador;
    const pessoa =  await user.buscar(req.body);
    const filme =  await movie.buscar(req.body);   

    if(filme[0].alugado == true){
        res.status(400).json("Filme alugado");
        }else if(typeof pessoa == "object" && typeof filme == "object"){
            let idade = parseInt(pessoa[0].birthday_date , 10)
            let classificacao = parseInt(filme[0].classificacao.split(" ")[1], 10);
            {
                if(idade < classificacao){
                    res.status(400).json("Filme não adequado para idade do locador");
                }else{
                    movie.alugado(filme[0].name);
                    next();
                }
            }
        }else{
            res.status(400).json("Filme ou Locador não encontrado");
        }
    
}
export default checkIdade;