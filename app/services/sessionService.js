const sessionModel = require("../model/sessionModel");

const userSession={};
userSession.createSession=async(payload)=>{
    return await new sessionModel(payload).save();
}
module.exports=userSession;