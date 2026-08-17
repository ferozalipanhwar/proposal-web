const Poem = require('../models/Poem');

exports.getPoems = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) filter.category = category;
    const poems = await Poem.find(filter).sort({ order: 1, date: -1 });
    res.json(poems);
  } catch (err) { next(err) }
};

exports.getPoem = async (req, res, next) => {
  try {
    const poem = await Poem.findById(req.params.id);
    if (!poem) return res.status(404).json({ message: 'Not found' });
    res.json(poem);
  } catch (err) { next(err) }
};

exports.createPoem = async (req, res, next) => {
  try {
    const data = {
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      order: req.body.order || 0,
      featured: !!req.body.featured,
      audioUrl: req.body.audioUrl
    };
    const poem = new Poem(data);
    await poem.save();
    res.status(201).json(poem);
  } catch (err) { next(err) }
};

exports.updatePoem = async (req, res, next) => {
  try {
    const poem = await Poem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(poem);
  } catch (err) { next(err) }
};

exports.deletePoem = async (req, res, next) => {
  try {
    await Poem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { next(err) }
};
