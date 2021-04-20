const {Usuario, sequelize} = require('../models');


const usuariosController = {
    index: async (req, res) => {
        let usuarios =  await Usuario.findAll();
        
        return res.render('usuarios',{ listaUsuarios: usuarios });
    },

    create: async (request, response) => {
        let { nome, email, senha } = request.body;

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });

        return response.json(novoUsuario);
    },

    update: async (req,res) => {
        const { id } = req.params;
        const{ nome, email,senha } = req.body;

        const usuario = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {id}
        });

        return res.json(usuario);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const usuario = await Usuario.destroy({
            where: {id}
        });

        return res.json(usuario);
    }

    }
    

module.exports = usuariosController;

