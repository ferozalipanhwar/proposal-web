const Memory = require('../models/Memory');

exports.getMemories = async (req, res, next) => {
  try {
    const memories = await Memory.find().sort({ order: 1, date: -1 });
    res.json(memories);
  } catch (err) { next(err) }
};

exports.getMemory = async (req, res, next) => {
  try {
    const memory = await Memory.findById(req.params.id);
    if (!memory) return res.status(404).json({ message: 'Not found' });
    res.json(memory);
  } catch (err) { next(err) }
};

exports.createMemory = async (req, res, next) => {
  try {
    const data = { title: req.body.title, description: req.body.description, imageUrl: req.body.imageUrl, order: req.body.order || 0 };
    const memory = new Memory(data);
    await memory.save();
    res.status(201).json(memory);
  } catch (err) { next(err) }
};

exports.updateMemory = async (req, res, next) => {
  try {
    const memory = await Memory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(memory);
  } catch (err) { next(err) }
};

exports.deleteMemory = async (req, res, next) => {
  try {
    await Memory.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { next(err) }
};
