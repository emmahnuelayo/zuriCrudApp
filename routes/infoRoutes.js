const express = require("express");
const infoController = require("./../controllers/infoController");
const router = express.Router();

router
  .route("/")
  .get(infoController.getAllInfos)
  .post(infoController.createInfo);

//for those that require id
router
  .route("/:id")
  .get(infoController.getInfo)
  .patch(infoController.updateInfo)
  .delete(infoController.deleteInfo);

module.exports = router;
