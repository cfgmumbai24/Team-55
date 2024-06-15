const Goat = require('../models/goatmodel')
exports.getgoatinfo = async(req,res)=>
    {
        try
        {
            const goat = await Goat.find({})
            res.send(200).json(
                {
                    success:true,
                    message:'successfully fecthed goat into',
                    goats:goat
                }
            )
        }
        catch(err)
        {
            console.log(err)
            res.status(500).json(
                {
                    success:false,
                    message:"error while fetching goat info"
                }
            )
        }
    }

exports.getgoatbyid=async(req,res)=>
    {
        try
        {
            const {id}=req.body._id
            const goat = await Goat.find({_id:id})
            res.send(200).json(
                {
                    success:true,
                    message:'successfully fecthed goat into',
                    goats:goat
                }
            )
        }
        catch(err)
        {
            console.log(err)
            res.status(500).json(
                {
                    success:false,
                    message:"error while fetching goat info"
                }
            )
        }
    }