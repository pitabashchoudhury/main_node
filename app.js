require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const routes =require("./src/routes")
const errorHandler = require("./src/middleware/error_handler")

const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:3000", // only allow this origin
  methods: ["GET", "POST"], // only allow certain methods
  credentials: true, // allow cookies (for sessions)
};

app.use(cors(corsOptions));
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ["GET", "POST"],
//   credentials: true,              // allow cookies/sessions
// }));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", routes);
// Global Error Handler (keep at the end)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
