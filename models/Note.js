// Require mngoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;
// This is similar to a Sequelize model
var NoteSchema = new Schema({
    // `title` is of type String
    title: String,
    // `body` is of type String
    body: String
  });
// Create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);
// Export the Note model
module.exports = Note;