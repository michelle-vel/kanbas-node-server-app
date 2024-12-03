import * as assignmentsDao from "../Assignments/dao.js";
export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
      const { assignmentId } = req.params;
      const status = assignmentsDao.deleteAssignment(assignmentId);
      res.send(status);
    });
    app.put("/api/assignments/:assignmentId", async (req, res) => {
      const { assignmentId } = req.params;
      const assignmentUpdates = req.body;
      const status = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
      res.send(status);
    });
    app.post("/api/courses/:courseId/assignments", (req, res) => {
      const { courseId } = req.params;
      const assignment = {
        ...req.body,
        course: courseId,
      }
      const newAssignment = assignmentsDao.createAssignment(assignment);
      res.send(newAssignment);
    });
}