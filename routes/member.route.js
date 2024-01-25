const express = require("express");
const membercon = require("../controllers/member.controller");
const router = express.Router();

router.post("/members", membercon.registerDetail);
router.get("/members", membercon.registerMemberDetail);
router.put("/member", membercon.updateMemberDetail);
router.delete("/member", membercon.deleteMemberDetail);

module.exports = router;
