const mongoose = require('mongoose');

const PoemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, index: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  order: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  audioUrl: { type: String }
});

module.exports = mongoose.model('Poem', PoemSchema);
