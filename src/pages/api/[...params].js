export default function handler(req, res) {
  if (req.query.params.length === 2) {
    const params = {
      one: req.query.params[0],
      two: req.query.params[1],
    };
    res.status(200).json(params);
  } else if (req.query.params.length === 1) {
    const params = {
      one: req.query.params[0],
    };
    res.status(200).json(params);
  }
  res.status(200).json(req.query.params);
}
