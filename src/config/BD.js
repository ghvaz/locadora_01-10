import mongo from "mongoose";

const connect = async function (){
    try {        
        await mongo.connect(`${process.env.STRING_BD}${process.env.COLECTION_BD}`)
        console.log("Conectado ao BD");
        
    } catch (error) {
        console.log("ERRO NA CONECÇÃO COM O BANCO DE DADOS");
        console.log(error);
    }
}

connect()

export default mongo