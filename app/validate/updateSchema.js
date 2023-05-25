const Joi=require('joi');
const updateSchema={
    body:{
        name:Joi.string().optional(),
    }
}
module.exports=updateSchema;