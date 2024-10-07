import movie from "../models/movie.js";

export default {
    alugar: async function (req) {
        let filme = await movie.find({name: req.name}).exec();
        filme[0].alugado = true;
        await movie.findOneAndUpdate({name: req.name}, filme[0]);
    },
    buscar: async function (req) {
        try {
            let user = await movie.find({ name: req.filme });            
            if ( user.length == 0) {
                return "Filme não encontrado"
            } else {   
                return user
            }   
        } catch (error) {
            return error
        }
    },

    add: async function (req, res) {
        try {
            let filme = await movie.create(req.body);
            res.status(201).json(filme);
        } catch (error) {
        res.status(418).json(`ERRO NA CRIACAO DO FILME: ${error}`);
        }
    },

    list: async function (req, res) {
        try {
            let filme = await movie.find();
            res.status(200).json(filme);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    show: async function (req, res) {
        try {
            let filme = await movie.find({name: req.params.nome}).exec();
            if(filme.length == 0){
                res.status(404).json("Filme não encontrado");
            }else{
                res.status(200).json(filme);
            }
        } catch (error) {
            res.status(400).json(error);
        }
    },

    destroy: async function (req, res) {
        try {
            let filme = await movie.findOneAndDelete({name: req.params.nome}).exec();
            res.status(200).json(filme);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    update: async function (req, res) {
        try {
            let filme = await movie.findOneAndUpdate({name: req.params.nome}, req.body).exec();
            res.status(200).json(filme);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}