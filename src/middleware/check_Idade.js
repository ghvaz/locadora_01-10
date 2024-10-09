import user from "../controllers/user.js";
import movie from "../controllers/movie.js";


const checkIdade = async function (req, res, next) {
    let pessoa =  await user.buscar(req.body);
    let filme =  await movie.buscar(req.body); 
    
    if (pessoa[0] == "Usuario não encontrado"){
        res.status(400).json(pessoa);
    } 
    if(filme[0] == "Filme não encontrado"){
        res.status(400).json(filme);
    }    
    if(filme[0].alugado == true){
        res.status(400).json("Filme já alugado");
    }
    
    if(pessoa[0] != "Usuario não encontrado" && filme[0] != "Filme não encontrado" && filme[0].alugado != true){
        let idade = parseInt(pessoa[0].birthday_date , 10)
        let classificacao = parseInt(filme[0].classificacao.split(" "), 10);
        if(idade < classificacao){
            res.status(400).json("Filme não adequado para idade do locador");
        }else{
            movie.alugar(filme[0]);
            next();
        }

    }
    
}
export default checkIdade;