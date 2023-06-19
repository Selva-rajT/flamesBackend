module.exports=(sequelize,DataTypes)=>{
    let Model=sequelize.define('user',{
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
    tableName:'user',
    schema:'user'
})
return Model;
}

