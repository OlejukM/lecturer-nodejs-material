const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

// router.use((req, res, next) => {
//   console.log("Time", Date.now());
//   next();
// });

router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);

router.post("/", userController.addUser);

router.put("/:id", userController.editUser);

router.delete("/:id", userController.deleteUserById);
router.delete("/", userController.deleteAllUsers);

module.exports = router;
