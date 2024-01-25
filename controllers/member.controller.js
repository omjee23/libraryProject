const memberService = require("../services/member.services");

const registerDetail = async (req, res) => {
  const detail = req.body;
  const registerInfo = await memberService.memberRegisterValidation(detail);
  res.send(registerInfo);
};

const registerMemberDetail = async (req, res) => {
  const detail = req.body;
  const registerMemberInfo = await memberService.memberDetailValidation(detail);
  res.send(registerMemberInfo);
};

const updateMemberDetail = async (req, res) => {
  const details = req.body;
  const updateMemberinfo = await memberService.updateMemberValidation(details);
  res.send(updateMemberinfo);
};

const deleteMemberDetail = async (req, res) => {
  const details = req.body;
  const deleteMember = await memberService.deleteMemberValidation(details);
  res.send(deleteMember);
};

module.exports = {
  registerDetail,
  registerMemberDetail,
  updateMemberDetail,
  deleteMemberDetail,
};
