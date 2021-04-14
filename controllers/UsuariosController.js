  
const {Usuario} = require("../models");

const usuariosController = {
    index: async (req, res) => {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },

    create: async (req, res) => {
        const {nome: _nome, email: _email, senha: _senha} = req.body; 

        const usuario = await Usuario.create({
            nome: _nome,
            email: _email,
            senha: _senha
        });

        return res.json(usuario);
    },

    update: async (req, res) => {
        const {id: _id} = req.params;
        const {nome: _nome, email: _email, senha: _senha} = req.body;

        const usuario = await Usuario.update({
            nome: _nome,
            email: _email,
            senha: _senha
        }, {
            where: {
                id: _id
            }
        });

        return res.json(usuario);
    },

    delete: async (req, res) => {
        const {id: _id} = req.params;
        
        const usuario = await Usuario.destroy({
            where: {
                id: _id
            }
        });

        return res.json(usuario);
    }

}

module.exports = usuariosController;