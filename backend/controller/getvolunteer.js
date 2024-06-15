const Volunteer = require('../models/voluntermodel')
exports.getvolunteer = async(req,res)=>
    {
        try
        {
             const user = Volunteer.find({})
             res.status(201).json(
                {
                    success:true,
                    message:"successfully fetched the volunteer data",
                    volunteers:user
                }
             )
        }
        catch(err)
        {
            console.log(err)
            res.status(500).json(
                {
                    success:true,
                    message:"error while voultneer fetching"
                }
            )
        }
    }

    exports.getvolunteerbyid = async(req,res)=>
        {
            try
        {
            const {id}=req.body
             const user = Volunteer.find({_id:id})
             res.status(201).json(
                {
                    success:true,
                    message:"successfully fetched the volunteer data",
                    volunteers:user
                }
             )
        }
        catch(err)
        {
            console.log(err)
            res.status(500).json(
                {
                    success:true,
                    message:"error while voultneer fetching"
                }
            )
        }
        }