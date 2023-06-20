module.exports=(sequelize,DataTypes)=>{
    let Model=sequelize.define('victim',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
         name1:{
            type:DataTypes.STRING,
            allowNull:false
        },
        name2:{
            type:DataTypes.STRING,
            allowNull:false
        },
        result:{
            type:DataTypes.STRING
        }
},{
    tableName:'victim',
    schema:'victims'
})
return Model;
}

