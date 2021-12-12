module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define('genres', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          notNull:false,
          type: dataTypes.INTEGER
        },
        name:{
            notNull:false,
            type: dataTypes.STRING(100)
        },
        ranking:{
            notNull:false,
            type: dataTypes.DECIMAL
        },
        active:{
            notNull:false,
            type: dataTypes.INTEGER
        },

      },{
          tableName: 'genres',
          timestamps: false,
      });
      return Genre;
    };