const User = require("./schema");

async function updateUser(req, res, next) {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (e) {
    next(e);
  }
}

async function createUser(req, res, next) {
  try {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = re.test(String(req.body.email).toLowerCase());
    if (!test) return res.status(401).json({ error: "Invalid email" });

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

async function getUsers(req, res, next) {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

async function deleteUser(req, res, next) {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) throw `Error while deleting user with id: ${req.params.id}`;
    res.status(200).json(deleted);
  } catch (e) {
    next(e);
  }
}

module.exports = { updateUser, createUser, getUsers, getUserById, deleteUser };
