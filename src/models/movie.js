/*
movie{
    name,
    release_date,
    director,
    classification [Livre, Maior16, Maior18]
}
*/
import { Schema } from "mongoose";
import bd from "../config/BD.js";
const SchemaFilme = new bd.Schema({
    name: {
        type: String,
        required: true },
    lancamento: {
        type: String,
        required: true } ,
    classificacao: {
        type: String,
        enum:["+ 0", "+ 10", "+ 12", "+ 14", "+ 16", "+ 18"],
        required: true },
    diretor: {
        type: String,
        default: "diretor não comentado" },
    alugado: {
        type: Schema.Types.Boolean,
        default: false }
    
})

const Movie = bd.model("Movie", SchemaFilme);

export default Movie