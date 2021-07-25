const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// router.get('/', adviceController.advice_get);

router.get("/count=:count", controller.shiba_get);

module.exports = router;
