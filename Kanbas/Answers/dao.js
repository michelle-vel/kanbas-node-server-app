import model from "./model.js";

/**
 * Finds answers for a specific quiz.
 * @param {string} quizId - The ID of the quiz.
 * @returns {Promise} - Promise resolving to answers for the quiz.
 */
export function findAnswersForQuiz(quizId) {
  return model.find({ quiz: quizId }).populate("question").populate("user");
}

/**
 * Finds answers submitted by a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} - Promise resolving to answers submitted by the user.
 */
export function findAnswersByUser(userId) {
  return model.find({ user: userId }).populate("question").populate("quiz");
}

/**
 * Creates new answers.
 * @param {Array} answers - Array of answer objects to create.
 * Each answer object should contain `question`, `user`, `quiz`, and `answer` fields.
 * @returns {Promise} - Promise resolving to the created answers.
 */
export function createAnswers(answers) {
  return model.insertMany(answers);
}

/**
 * Updates an answer by ID.
 * @param {string} answerId - The ID of the answer to update.
 * @param {Object} answerUpdates - The updates to apply to the answer.
 * @returns {Promise} - Promise resolving to the updated answer.
 */
export function updateAnswer(answerId, answerUpdates) {
  return model.updateOne({ _id: answerId }, { $set: answerUpdates });
}

/**
 * Deletes an answer by ID.
 * @param {string} answerId - The ID of the answer to delete.
 * @returns {Promise} - Promise resolving to the deletion result.
 */
export function deleteAnswer(answerId) {
    return model.deleteOne({ _id: answerId });
  }
  
  /**
   * Deletes all answers for a specific quiz.
   * @param {string} quizId - The ID of the quiz.
   * @returns {Promise} - Promise resolving to the deletion result.
   */
  export function deleteAnswersForQuiz(quizId) {
    return model.deleteMany({ quiz: quizId });
  }
  