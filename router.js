const { Router } = require("express");
const {
  updateUser,
  createUser,
  getUsers,
  getUserById,
  deleteUser,
} = require("./controller");
const router = new Router();

router.post("/api/users", createUser);

router.get("/api/users", getUsers);

router.get("/api/users/:id", getUserById);

router.put("/api/users/:id", updateUser);

router.delete("/api/users/:id", deleteUser);

module.exports = router;
