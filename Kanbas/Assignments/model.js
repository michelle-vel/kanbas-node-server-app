import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("AssignmentModel", schema);
export default model;