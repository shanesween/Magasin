const router = require("express").Router();
const { User } = require("../db/models");
const { checkAdmin } = require("./middleware");
module.exports = router;

router.get("/", checkAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email", "isAdmin"]
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:singleUserId", async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.singleUserId);
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId", async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId
      }
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
