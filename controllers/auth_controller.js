var exports = (module.exports = {});

exports.logout = (req, res, next) => {
    // I may remove one of these...
  req.logout(); // Udemy example.. cookies <-- passport built in function
  req.session.destroy(err => {
    if (err) {
      console.log(err);
      res.redirect('/error');
    }
    next();
  });
};
