import user from "../controllers/user.js";

const checkIdade = async function (req, res, next) {

    const id_F = req.body.locador;
    const pessoa =  await user.buscar(req, res);
    console.log(pessoa);
    
    
    
    
    next();
}
export default checkIdade;