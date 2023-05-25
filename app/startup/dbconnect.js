const mongoose=require('mongoose');
async function dbConnect(){
    await mongoose.connect();
    console.log('database connected successfully');
}
module.exports=dbConnect;