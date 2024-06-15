const mongoose =require('mongoose')
const volunteerschema = mongoose.Schema(
    {
        
        currentloaction:
        {
            type:String,
            required:true
        },
        user:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        beneficiary:
       [{
           type:mongoose.Schema.Types.ObjectId,
           ref:'Beneficiary' 
        }]

    }
)
const Volunteer = mongoose.model('Volunteer',volunteerschema)
module.exports = Volunteer