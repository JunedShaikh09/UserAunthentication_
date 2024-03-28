import mongoose from "mongoose";

import {} from 'dotenv/config'

//const uri = "mongodb+srv://FullStack:Conestoga@cluster0.1ua8had.mongodb.net/CostCoUserz?retryWrites=true&w=majority&appName=Cluster0";

const uri = process.env.MONGO_URI
mongoose.connect(uri).then(()=>
    console.log("******connected to Mongodb Successfully********")).catch((err)=>
        console.log(`Connection Failed due to error below\n${err}`)
    )


const userSchema = mongoose.Schema({
    name :{type:String,required:true},
    email :{type:String,required:true},
    pwd  : {type:String,required:true}
})

const userModel = mongoose.model('GeneralUser',userSchema)

export default userModel