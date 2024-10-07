import model from "../models/user.js";

export default {
    buscar: async function (req) {
        try {
            let user = await model.find({ email: req.locador });
            if ( user.length == 0) {
                return "Usuario não encontrado"
            } else {   
                return user
            }   
        } catch (error) {
            return error
        }
    },
    
    list: async function (req, res) {
        try {
            let user = await model.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    add: async function (req, res) {
        try {
            let user = await model.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(418).json(`ERRO NA CRIACAO DO USUARIO: ${error}`);
        }
    },
    show: async function (req, res) {
        try {
            let user = await model.find({ email: req.params.email });
            if (user.length == 0) {
                res.status(404).json("Usuario não encontrado");
            } else {
                res.status(200).json(user);
            }   
        } catch (error) {
            res.status(400).json(error);
        }
    },
    destroy: async function (req, res) {
        try {
            let user = await model.findOneAndDelete({ email: req.params.email });
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    update: async function (req, res) {
        try {
            let user = await model.findOneAndUpdate({ email: req.params.email }, req.body);
            res.status(200).json("user atualizado");
        } catch (error) {
            res.status(400).json(error);
        }
    },
}