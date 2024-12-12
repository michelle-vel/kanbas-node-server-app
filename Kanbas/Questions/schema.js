import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
    {
      title: String,
      points: Number,
      question: String,
      type: { type: String, enum: ["True/False", "Multiple Choice", "Long Answer"] },
      correctAnswer: String, // Optional for non-MC/TF questions
      choices: [String], // Optional, for MC questions
      quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
      description: String,
    },
    { collection: "questions" }
  );

export default questionSchema;