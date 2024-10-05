/** 
* Entidade: Rented
{
    rented_by: ObjectId (referência para o usuário que alugou),
    movie_rented: ObjectId (referência para o filme alugado),
    rent_date: Date,
    return_date: Date
}
*/

import BD from "../config/BD.js";

const SchemaLocacao = new BD.Schema({
    locador: {
        type: Object,
        required: true,
        ref: "User"
    },

    filme:{
        type: Object,
        required: true,
        ref: "Movie"
    },

    diaInicial: {
        type: Date,
        required: true,
        default: Date.now
    },
    diasLocado: {
        type: Number,
        required: true
    },

    devolvido:{
        type: Boolean,
        default: false
    }

})

const Locacao = BD.model("Locacao", SchemaLocacao)
export default Locacao