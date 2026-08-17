let settings = {
  letter: 'Dear...',
  proposalText: 'Will you be my forever?'
};

exports.getSettings = async (req, res) => {
  res.json(settings);
};

exports.updateSettings = async (req, res) => {
  settings = { ...settings, ...req.body };
  res.json(settings);
};
