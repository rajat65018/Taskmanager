const Joi=require('joi');
const signUpSchema={
    body:{
        name:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
        contact:Joi.string().required(),
    }
}
module.exports=signUpSchema;