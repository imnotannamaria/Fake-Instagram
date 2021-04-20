const {Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts =  await Post.findAll();
        
        return res.render('index', { listaPosts: posts });
    },

    show: async(request, response) => {
        const { id } = request.params;

        const postsUsuario = await Post.findAll({
            where: {
                usuarios_id: id
            }
        });

        return response.json(postsUsuario);
    },

    create: async (req, res) => {
        const { texto, img, usuarios_id, n_likes } = req.body;
        const novoPost = await Post.create ({
            texto,
            img,
            n_likes,
            usuarios_id 
        });

        return res.json(novoPost);
    },

    update: async (req,res) => {
        const { id } = req.params;
        const { texto, img, usuarios_id, n_likes } = req.body;

        const posts = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: {id}
        });

        return res.json(posts);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const posts = await Post.destroy({
            where: {id}
        });

        return res.json(posts);
    }
}
    

module.exports = postsController;