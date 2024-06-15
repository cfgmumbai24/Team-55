const Goat = require('../models/goatmodel')
exports.creategoatinfo = async(req,res)=>
    {
        try
        {
            const {gender,tagno,weight,price,age,vaccinationdate,date} = req.body
            const goat = new Goat(
                {
                    gender,
                    tagno,
                    weight,
                    price,
                    age,
                    date,
                    vaccinationdate
                }
            )
            const saveuser = await goat.save()
            res.status(201).json(
                {
                    success:true,
                    message:"successfully created goat"
                }
            )
        }
        catch(err)
        {
            console.log(err)
            res.status(505).json(
                {
                    message:"error while creating goat",
                    success:false
                }
            )
        }
    }