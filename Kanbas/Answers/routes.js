import * as answersDao from "./dao.js";
export default function AnswerRoutes(app) {
    /**
 * Create answers for a quiz submission.
 * @route POST /api/answers
 * @body {Array} answers - Array of answer objects.
 * Each answer object should include `question`, `quiz`, `user`, and `answer` fields.
 */
app.post("/api/answers", async (req, res) => {
    try {
      const { answers } = req.body;
      if (!answers || !Array.isArray(answers)) {
        return res.status(400).send({ error: "Invalid answers format." });
      }
  
      const createdAnswers = await answersDao.createAnswers(answers);
      res.status(201).json(createdAnswers);
    } catch (error) {
      console.error("Failed to create answers:", error);
      res.status(500).send({ error: "Failed to create answers." });
    }
  });
  
  /**
   * Fetch answers for a specific quiz.
   * @route GET /api/answers/quiz/:quizId
   */
  app.get("/api/answers/quiz/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const answers = await answersDao.findAnswersForQuiz(quizId);
      res.status(200).json(answers);
    } catch (error) {
      console.error("Failed to fetch answers for quiz:", error);
      res.status(500).send({ error: "Failed to fetch answers for quiz." });
    }
    });

/**
 * Fetch answers submitted by a specific user.
 * @route GET /api/answers/user/:userId
 */
app.get("/api/answers/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const answers = await answersDao.findAnswersByUser(userId);
      res.status(200).json(answers);
    } catch (error) {
      console.error("Failed to fetch answers for user:", error);
      res.status(500).send({ error: "Failed to fetch answers for user." });
    }
  });
  
  /**
   * Update an answer by ID.
   * @route PUT /api/answers/:answerId
   * @body {Object} answerUpdates - Fields to update in the answer.
   */
  app.put("/api/:answerId", async (req, res) => {
    try {
      const { answerId } = req.params;
      const answerUpdates = req.body;
      const result = await answersDao.updateAnswer(answerId, answerUpdates);
  
      if (result.modifiedCount === 0) {
        return res.status(404).send({ error: "Answer not found." });
      }
  
      res.status(200).send({ message: "Answer updated successfully." });
    } catch (error) {
      console.error("Failed to update answer:", error);
      res.status(500).send({ error: "Failed to update answer." });
    }
  });
  
/**
 * Delete an answer by ID.
 * @route DELETE /api/answers/:answerId
 */
app.delete("/api/:answerId", async (req, res) => {
    try {
      const { answerId } = req.params;
      const result = await answersDao.deleteAnswer(answerId);
  
      if (result.deletedCount === 0) {
        return res.status(404).send({ error: "Answer not found." });
      }
  
      res.status(200).send({ message: "Answer deleted successfully." });
    } catch (error) {
      console.error("Failed to delete answer:", error);
      res.status(500).send({ error: "Failed to delete answer." });
    }
  });
  
  /**
   * Delete all answers for a specific quiz.
   * @route DELETE /api/answers/quiz/:quizId
   */
  app.delete("/api/quiz/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const result = await answersDao.deleteAnswersForQuiz(quizId);
  
      if (result.deletedCount === 0) {
        return res.status(404).send({ error: "No answers found for this quiz." });
      }
  
      res.status(200).send({ message: "Answers for quiz deleted successfully." });
    } catch (error) {
      console.error("Failed to delete answers for quiz:", error);
      res.status(500).send({ error: "Failed to delete answers for quiz." });
    }
  });
    

}