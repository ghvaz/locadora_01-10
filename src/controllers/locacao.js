import model from "../models/locacao.js";

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
    }

}