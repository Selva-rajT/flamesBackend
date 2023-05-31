const {Op}=require('sequelize');
const {to,TE}=require('../global_functions');
const user=require('../models').user;

const addUser=async(userData)=>{
    // console.log('check',userData)
    let [error,data]=await to(user.create({
        name1:userData.firstName,
        name2:userData.secondName
    }));
    if(error) return TE(error.message);
    return data;
}

module.exports.addUser=addUser;


const updateResult=async(result)=>{
    console.log(result);
    let[error,res]=await to(user.update({result:result.value},
        {
            where:{[Op.and]:[
                {id:result.id}
            ]}
           
        }));
        if(error) return TE(error.message);
        return res;
}
module.exports.updateResult=updateResult;