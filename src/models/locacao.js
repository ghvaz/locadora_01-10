/** 
* Entidade: Rented
{
    rented_by: ObjectId (referência para o usuário que alugou),
    movie_rented: ObjectId (referência para o filme alugado),
    rent_date: Date,
    return_date: Date
}
*/

import { get } from "mongoose";
import BD from "../config/BD.js";
function valorFinal(dias) {
    let valor = 3;
    valor = valor * dias;
    return valor
}

const SchemaLocacao = new BD.Schema({
    locador: {
        type: BD.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    filme:{
        type: BD.Schema.Types.ObjectId,
        required: true,
        ref: "Movie"
    },

    diaInicial: {
        type: String,
        default: () => {
            let data = new Date().toISOString().split("T")[0];  
            console.log(data);

            return data
        }
    },
    diasLocado: {
        type: Number,
        required: true
    },

    devolvido:{
        type: Boolean,
        default: false
    },

    valorEmprestimo:{
        type: Number,
        default: function () {
            let valor = 2.5;
            valor = valor * this.diasLocado;
            return valor
        }
    }
})

const Locacao = BD.model("Locacao", SchemaLocacao)
export default Locacao