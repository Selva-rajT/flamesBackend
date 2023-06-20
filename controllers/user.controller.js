const router=require('express').Router({mergeParams:true});
const userService=require('../services/user.service');
const {to,ReS,ReE}=require('../global_functions');
const victim=require('../models').victim;

const addUser=async(req,res)=>{
    // console.log(req.body)
    let [error,user]=await to(userService.addUser(req.body));
    if(error) return ReE(res,error,422);
    return ReS(res,user,200);
}

const updateUser=async(req,res)=>{
    let [error,user]=await to(userService.updateResult(req.body));
    if(error) return ReE(res,error,422);
    return ReS(res,user,200);
}
const getAll=async(req,res)=>{
    let [error,users]=await to(victim.findAll());
    if(error) return ReE(res,error,422);
    return ReS(res,users,200);
}

router.post('/',addUser);
router.put('/',updateUser);
router.get('/',getAll);

module.exports={router};
