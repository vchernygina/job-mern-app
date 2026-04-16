import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan, { format } from "morgan";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";

// routers
import jobRouter from "./routes/jobRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post(
  "/api/v1/test",
  [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 3, max: 50 })
      .withMessage("name mast be at list max 3 and min 50")
      .trim(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessage });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ message: `hellow ${name} test` });
  }
);

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "smth went wrong" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
