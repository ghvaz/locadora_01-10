import model from "../models/locacao.js";

import movie from "../controllers/movie.js";
import user from "../controllers/user.js"


export default {

    add: async function (req, res) {
        try {
            let locacao = await model.create(req.body);
            res.status(201).json(locacao);
        } catch (error) {
            res.status(418).json(`ERRO NA CRIACAO DA LOCACAO: ${error}`);
        }
    },
    list: async function (req, res) {
        try {
            let locacao = await model.find();
            res.status(200).json(locacao);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    show: async function (req, res) {
        try {
            let locacao = await model.find({filme: req.params.filme});
            res.status(200).json(locacao);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    
    destroy: async function (req, res) {
        try {   
            let locacao = await model.findOneAndDelete({filme: req.params.filme}).exec();
            res.status(200).json(`locação excluída: \n${locacao}`);
        } catch (error) {            
            res.status(400).json(error);
        }
    },

    update: async function (req, res) {
        try {
            let locacao = await model.findOneAndUpdate({filme: req.params.filme}, req.body).exec();
            res.status(200).json(`locação atualizada: \n${locacao}`);
        } catch (error) {            
            res.status(400).json(error);
        }
    },

    buscar: async function (req) {
        try {
            
        } catch (error) {
            return error
        }
    },

    devolucao: async function(req,res){
        try {
            console.log(req);
            let filme = await movie.buscar(req.body)
            let Usuario = await user.buscar (req.body)
            let loca = model.find({locador: Usuario[0].email , filme: filme[0].nome })
            if(filme.lenght < 2 && Usuario.lenght < 2){
                filme[0].alugado = false
                movie.update(filme[0])
                

                
            }else{
                res.status(400).json(filme, Usuario)
            }
        } catch (error) {
            res.status(400).json(error)
            
        }
    }

}