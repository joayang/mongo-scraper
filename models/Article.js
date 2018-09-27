// Require mongoose
var mongoose = require("mongoose");
// var Note = require("./Note");
// Create schema class
var Schema = mongoose.Schema;
// Create artical schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        required: false
    },
    notes: {
        type: Schema.Types.ObjectId,
        ref: "Note"  // the Note declare on line #3
    }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;