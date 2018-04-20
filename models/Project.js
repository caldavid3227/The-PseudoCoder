var mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  answer: { type: [], required: true },
  date: { type: Date, default: Date.now }
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;