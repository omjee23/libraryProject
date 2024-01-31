const memberModel = require("../models/member.model");
const constResponse = require("../constants/cons.response");

const memberRegisterValidation = function (memberData) {
  if (!memberData.fullName || !memberData.mobileNumber) {
    return constResponse.fieldMissingError;
  }
  if (memberData.mobileNumber.length !== 10) {
    return constResponse.mobileAndPasswordError;
  }
  return memberModel.registerMember(memberData);
};

const memberDetailValidation = function () {
  return memberModel.getMembersData();
};

const updateMemberValidation = function (memberData, memberId) {
  if (!memberId || !memberData) {
    return constResponse.fieldMissingError;
  }
  return memberModel.updateMember(memberData, memberId);
};

const deleteMemberValidation = function ( memberId) {
  if (!memberId) {
    return constResponse.fieldMissingError;
  }
  return memberModel.deleteMember(memberId);
};

module.exports = {
  memberRegisterValidation,
  memberDetailValidation,
  updateMemberValidation,
  deleteMemberValidation,
};
