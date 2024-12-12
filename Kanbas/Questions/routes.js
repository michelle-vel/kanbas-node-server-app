import * as questionDao from "./dao.js";

export default function QuestionRoutes(app) {
    app.delete("/api/questions/:questionId", async (req, res) => {
      const { questionId } = req.params;
      const status = await questionDao.deleteQuestion(questionId);
      res.send(status);
    });
  
    app.put("/api/questions/:questionId", async (req, res) => {
      const { questionId } = req.params;
      const questionUpdates = req.body;
      const status = await questionDao.updateQuestion(
        questionId,
        questionUpdates
      );
      res.send(status);
    });
  
    app.post("/api/quizzes/:quizId/questions", (req, res) => {
      const { quizId } = req.params;
      const question = {
        ...req.body,
        quiz: quizId,
      };
      const newQuestion = questionDao.createQuestion(question);
      res.send(newQuestion);
    });
  }