
module.exports = (sequelize, DataTypes) => {
    
    const Comentarios = sequelize.define(
        'Comentarios',{
            texto: DataTypes.STRING,
        },
        {
            tableName: "comentarios",
            timestamps: false
        }
    );

    Comentarios.associate = (models) => {
        
        Comentarios.belongsTo(models.Post, { as: 'post', foreignKey: 'posts_id' });
    }

    return Comentarios ;
}