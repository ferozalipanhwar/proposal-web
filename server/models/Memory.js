const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
  imageUrl: { type: String },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Memory', MemorySchema);
