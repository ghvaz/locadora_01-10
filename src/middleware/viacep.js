import axios from "axios"

const cep_endereco = (req, res, next) => {
    
    if(!(req.body.addres)){
        next()
    }else{
        if (req.body.addres.cep.length == 8 && !isNaN(Number(req.body.addres.cep)) ) {
            axios.get(`https://viacep.com.br/ws/${req.body.addres.cep}/json/`)
                .then((resposta) => {
                    req.body.addres = resposta.data 
                    const {cep, logradouro, bairro, localidade, uf} = resposta.data
                    req.body.addres = {cep, logradouro, bairro, localidade, uf}
                    next()
                })
        } else {
            res.status(400).json()
        }
    }
}

export default cep_endereco