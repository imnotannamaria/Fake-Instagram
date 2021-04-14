module.exports = (sequelize, DataTypes) => {
    
    const Post = sequelize.define(
        'Post',{
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            n_likes: DataTypes.INTEGER
        },
        {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        //Relação de 1:N(usuario tem varios posts)
        Post.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarios_id' });
    }

    Post.associate = (models) => {
        //relação 1:N
        Post.hasMany(models.Comentarios, {as:'comentarios', foreignKey:'posts_id'});
    }

    return Post;
}