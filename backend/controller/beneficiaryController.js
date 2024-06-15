const Beneficiary = require("../models/beneficiaryModel");

const getAllBeneficiaries = async (req, res) => {
    try{
        const beneficiaries = await Beneficiary.find();
        res.status(200).json(beneficiaries);
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
};

const getBeneficiary = async (req, res) => {
    try{
        const {id} = req.params;
        const beneficiary = await Beneficiary.findById(id);
        res.status(200).json(beneficiary);
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
};

const createBeneficiary = async (req,res) => {
    try{
        const beneficiary = new Beneficiary(
            {
                
            }
        )
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
};

const deleteBeneficiary = async (req,res) => {
    try{
        const {id} = req.params;
        const beneficiary = await Beneficiary.findByIdAndDelete(id);
        if (!beneficiary){
            res.status(404).json({error: "No such beneficiary"});
        }
        res.status(200).json(beneficiary);
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
};

const updateBeneficiary = async (req, res) => {
    const {id} = req.params;
    try {
        const beneficiary = await Beneficiary.findByIdAndUpdate(id, {
            ...req.body
        });
        if (!beneficiary) {
            return res.status(404).json({ error: 'No such beneficiary' });
        }
        res.status(200).json("Beneficiary updated successfully")
    }
    catch (err) {
        res.status(404).json({ error: 'No such beneficiary' });
    }
} 

const getGoats = async(req,res) => {

};

module.exports = {
  getAllBeneficiaries,
  getBeneficiary,
  createBeneficiary,
  deleteBeneficiary,
  updateBeneficiary
};
