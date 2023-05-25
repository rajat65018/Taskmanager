const Joi=require('joi');
function validateJoiSchema(){
    return (req,res,next)=>{
        if(schema.body){
            const result=Joi.Object(schema.body).validate(req.body);
            if(result.error){
                return res.json({message:result.error.message});
            }
            next();
        }
        if(schema.headers){
            const result=Joi.Object(schema.headers).validate(req.headers);
            if(result.error){
               return res.json({message:result.error.message});
            }
            next();
        }
        if(schema.params){
            const result=Joi.Object(schema.params).validate(req.params);
            if(result.error){
                return res.json({message:result.error.message});
            }
            next();
        }
    }
}
module.exports=validateJoiSchema;