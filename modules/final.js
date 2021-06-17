const final = (req, res) => {
  console.log('A request was made to the root');
  res.send('A request was made to the root');
};
module.exports = final;
