import mongoose from "mongoose";
const answerSchema = new mongoose.Schema(
    {
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionModel",
    }, // References the question being answered
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
      }, // References the user who submitted the answer
      answer: String, 
      points: Number,
      quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuizModel",
      }, // References the quiz this answer belongs to
    },
    { collection: "answers" }
  );
  
  export default answerSchema;
  