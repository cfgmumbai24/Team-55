const Assignment = require("../models/assignmentModel");

const getAllAssignments = async (req, res) => {
  try{
      const assignments = await Assignment.find();
      res.status(200).json(assignments);
  }
  catch(err){
      res.status(400).json({error: err.message})
  }
};

const getMonthlyAssignments = async (req, res) => {
    try{
        const startOfYear = new Date(new Date().getFullYear(), 0, 1);
        const endOfYear = new Date(new Date().getFullYear() + 1, 0, 1);

        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 11);
        startDate.setDate(1);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(0);

        const counts = await Assignment.aggregate([
        {
            $match: {
            date: {
                $gte: startDate,
                $lt: endDate
            }
            }
        },
        {
            $group: {
            _id: {
                year: { $year: "$date" },
                month: { $month: "$date" }
            },
            count: { $sum: 1 }
            }
        },
        {
            $sort: {
            "_id.year": 1,
            "_id.month": 1
            }
        }
        ]);

        console.log("Counts:", counts);

        // Format the response to include year and month for the past 12 months
        const result = [];
        const currentYear = endDate.getFullYear();
        const currentMonth = endDate.getMonth() + 1;

        for (let i = 0; i < 12; i++) {
        const date = new Date(currentYear, currentMonth - 1 - i, 1);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const count = counts.find(item => item._id.year === year && item._id.month === month)?.count || 0;
        result.unshift({ year, month, count });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching monthly assignments:", error);
        res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllAssignments, getMonthlyAssignments };
