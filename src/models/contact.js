import mongoose from "mongoose";

const contactschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},
{
    timestamps:true
})

const contect=mongoose.model.connect || mongoose.model('Connect', contactschema)
 
export default  contect;