const { SECRETKEY } = require("../../config");
const { createSession } = require("../services/sessionService");
const { findOneUser, createUser } = require("../services/userService");
const MESSAGES = require("../utils/messages");

const userController={};
userController.signUp=async(req,res)=>{
    const payload=req;
    if(await findOneUser({email:payload.email})){
        return res.json({message:MESSAGES.EMAIL_EXIST});
    }
    const user=await createUser(payload);
    const token=jwt.sign({_id:user._id},SECRETKEY);
    const session={
        token:token,
        userId:user._id,
    }
    await createSession(session);
    return res.json({message:MESSAGES.ACCOUNT_CREATED});
}
userController.login=async(req,res)=>{
    const payload=req.body;
    const user=await findOneUser({email:payload.body});
    if(!user){
        return res.json({message:MESSAGES.USER_NOT_EXIST})
    }
    const token=jwt.sign({_id:user._id},SECRETKEY);
    const session={
        token:token,
        userId:user._id,
    }
    await createSession(session);
    return res.json({message:MESSAGES.LOGIN_SUCCESSFUL});
}

userController.update=async(req,res)=>{
    
}
module.exports=userController;