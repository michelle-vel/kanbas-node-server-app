import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    name: String,
    status: String,
    dueDate: Date,
    points: Number,
    questions: Number,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    description: String,
  },
  { collection: "quizzes" }
);
export default quizSchema;