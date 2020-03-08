const { User } = require("../db/models");

const checkAdmin = async (req, res, next) => {
  if (!req.session.passport) {
    res.sendStatus(403);
  } else {
    const user = await User.findByPk(req.session.passport.user);
    if (user.isAdmin) {
      next();
    } else {
      res.sendStatus(403);
    }
  }
};

const userCheck = (req, res, next) => {
  if (Number(req.user.id) === Number(req.params.userId)) {
    next();
  } else {
    res.sendStatus(403);
  }
};

// module.exports = { checkAdmin, userCheck };
module.exports = checkAdmin;
