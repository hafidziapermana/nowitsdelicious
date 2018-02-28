exports.homePage = (req, res) => {
  res.render('index', { msg: 'It Works' })
}