module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define('movies', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          notNull:false,
          type: dataTypes.INTEGER
        },
        title:{
            notNull:false,
            type: dataTypes.STRING(500)
        },
        rating:{
            notNull:false,
            type: dataTypes.DECIMAL
        },
        awards:{
            notNull:false,
            type: dataTypes.INTEGER
        },
        length:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE

        },

      },{
          tableName: 'movies',
          timestamps: false,
      });
      return Movie;
    };
