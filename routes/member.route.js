const express = require('express');
const membercon = require('../controllers/member.controller');
const router = express.Router();

router.post('/register',membercon.registerDetail);
router.get('/get/members', membercon.registerMemberDetail); 
router.put('/update/member',membercon.updateMemberDetail);
router.delete('/delete/member', membercon.deleteMemberDetail);

module.exports = router;