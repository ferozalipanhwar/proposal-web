const mongoose = require('mongoose');

const ProposalResponseSchema = new mongoose.Schema({
  response: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProposalResponse', ProposalResponseSchema);
