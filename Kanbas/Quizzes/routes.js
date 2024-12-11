import * as quizDao from "./dao.js";
export default function QuizRoutes(app) {
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizDao.deleteQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizDao.updateQuiz(
        quizId,
        quizUpdates
    );
    res.send(status);
  });

  app.post("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
    };
    const newQuiz = quizDao.createQuiz(quiz);
    res.send(newQuiz);
  });
}