const ProposalResponse = require('../models/ProposalResponse');

exports.submitResponse = async (req, res, next) => {
  try {
    const { response } = req.body;
    if (!response) return res.status(400).json({ message: 'Response required' });
    const pr = new ProposalResponse({ response });
    await pr.save();
    res.status(201).json({ message: 'Saved' });
  } catch (err) { next(err) }
};

exports.listResponses = async (req, res, next) => {
  try {
    const list = await ProposalResponse.find().sort({ timestamp: -1 });
    res.json(list);
  } catch (err) { next(err) }
};
