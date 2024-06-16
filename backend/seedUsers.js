const mongoose = require("mongoose");
const User = require("./models/userModel");
require("dotenv").config();

const seedUsers = async () => {
  try {
    const sampleUserIds = [
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab1"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab2"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab3"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab4"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab5"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab6"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab7"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab8"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab9"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37aba"),
    ];

    const userData = [
      {
        _id: sampleUserIds[0],
        email: "user1@example.com",
        username: "user1",
        mobileNo: 1234567890,
        password: "password1",
        role: "user",
        imageUrl: "https://example.com/user1.jpg",
      },
      {
        _id: sampleUserIds[1],
        email: "user2@example.com",
        username: "user2",
        mobileNo: 2345678901,
        password: "password2",
        role: "user",
        imageUrl: "https://example.com/user2.jpg",
      },
      {
        _id: sampleUserIds[2],
        email: "user3@example.com",
        username: "user3",
        mobileNo: 3456789012,
        password: "password3",
        role: "user",
        imageUrl: "https://example.com/user3.jpg",
      },
      {
        _id: sampleUserIds[3],
        email: "user4@example.com",
        username: "user4",
        mobileNo: 4567890123,
        password: "password4",
        role: "admin",
        imageUrl: "https://example.com/user4.jpg",
      },
      {
        _id: sampleUserIds[4],
        email: "user5@example.com",
        username: "user5",
        mobileNo: 5678901234,
        password: "password5",
        role: "user",
        imageUrl: "https://example.com/user5.jpg",
      },
      {
        _id: sampleUserIds[5],
        email: "user6@example.com",
        username: "user6",
        mobileNo: 6789012345,
        password: "password6",
        role: "user",
        imageUrl: "https://example.com/user6.jpg",
      },
      {
        _id: sampleUserIds[6],
        email: "user7@example.com",
        username: "user7",
        mobileNo: 7890123456,
        password: "password7",
        role: "user",
        imageUrl: "https://example.com/user7.jpg",
      },
      {
        _id: sampleUserIds[7],
        email: "user8@example.com",
        username: "user8",
        mobileNo: 8901234567,
        password: "password8",
        role: "user",
        imageUrl: "https://example.com/user8.jpg",
      },
      {
        _id: sampleUserIds[8],
        email: "user9@example.com",
        username: "user9",
        mobileNo: 9012345678,
        password: "password9",
        role: "user",
        imageUrl: "https://example.com/user9.jpg",
      },
      {
        _id: sampleUserIds[9],
        email: "user10@example.com",
        username: "user10",
        mobileNo: 1234567809,
        password: "password10",
        role: "user",
        imageUrl: "https://example.com/user10.jpg",
      },
    ];

    await User.insertMany(userData);

    console.log("User data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding user data:", err);
    process.exit(1);
  }
};

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB for seeding users.");
    seedUsers();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
