const express = require("express");
const membercon = require("../controllers/member.controller");
const router = express.Router();

router.post("/members", membercon.registerDetail);
router.get("/members", membercon.registerMemberDetail);
router.put("/member/:memberId", membercon.updateMemberDetail);
router.delete("/member/:memberId", membercon.deleteMemberDetail);

module.exports = router;
