const transformateData = function (req, res, next) {
    const idade = req.body.birthday_date;
    {
        let aux = idade.split("/")
        //console.log(aux);
    
        const hoje = new Date().toISOString().split("T")[0];
        let aux2 = hoje.split("-")
        //console.log(aux2)
        
        let resultado = []
        let indice = 2
        aux.forEach((el,i) => {
            resultado[i] = aux2[indice] - el
            indice -= 1
        });
        //console.log(resultado);
        if (resultado[2] >= 0 && resultado[1] >= 0 && resultado[0] <= 0){
            req.body.birthday_date = (resultado[2])
        }if (resultado[2] >= 0 && (resultado[1] < 0 || resultado[0] < 0) ){
            req.body.birthday_date = (resultado[2] - 1)
        }else{
            req.body.birthday_date = resultado[2]
        }
    }
    next()
}
export default transformateData