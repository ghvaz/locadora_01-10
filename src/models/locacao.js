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
        type: BD.Schema.Types.Mixed,
        required: true,
        ref: "User"
    },

    filme:{
        type: BD.Schema.Types.Mixed,
        required: true,
        ref: "Movie"
    },
    
    diasLocado: {
        type: Number,
        required: true
    },

    diaInicial: {
        type: String,
        default: () => {
            let data = new Date().toISOString().split("T")[0];
            return data
        }
    },

    devolvido:{
        type: Boolean,
        default: false
    },

    diaDevolucao: {
        type: String,
        default: function () {
            let data = new Date()
            data.setDate(data.getDate() + this.diasLocado);
            data = data.toISOString().split("T")[0];
            return data
        }
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