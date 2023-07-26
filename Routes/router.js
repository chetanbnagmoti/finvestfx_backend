const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userController");

//routes:-

router.get("/user/details", controllers.userget);

router.put("/user/edit/:id", controllers.useredit);

module.exports = router;
