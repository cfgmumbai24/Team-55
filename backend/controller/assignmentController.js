const Assignment = require("../models/assignmentModel");

const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMonthlyAssignments = async (req, res) => {
  try {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const endOfYear = new Date(new Date().getFullYear() + 1, 0, 1);

    // Perform the aggregation to count assignments per month
    const counts = await Assignment.aggregate([
      {
        $match: {
          date: {
            $gte: startOfYear,
            $lt: endOfYear,
          },
        },
      },
      {
        $group: {
          _id: { $month: "$date" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    // Format the response to ensure all months are represented
    const result = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      count: 0,
    }));

    counts.forEach((item) => {
      result[item._id - 1].count = item.count;
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching monthly assignments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllAssignments, getMonthlyAssignments };
