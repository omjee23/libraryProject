const memberModel = require('../models/member.model')
const constResponse = require('../constants/cons.response');

const memberRegisterValidation = function (memberData) {
    if(!memberData.fullName || !memberData.mobileNumber || !memberData.password){
        return constResponse.fieldMissingError;
    }
    if (memberData.mobileNumber.length !== 10 && memberData.password.length !== 8 ) {
        return constResponse.mobileAndPasswordError;
    }
    return memberModel.registerMember(memberData);

}

const memberDetailValidation = function(){
    return memberModel.getMembersData();
}

const updateMemberValidation = function (memberData) {
    if(!memberData.fullName || !memberData.mobileNumber || !memberData.password){
        return constResponse.fieldMissingError;
    }
    if (memberData.mobileNumber.length !== 10 && memberData.password.length !== 8 ) {
        return constResponse.mobileAndPasswordError;
    }
    return memberModel.updateMember(memberData);
}

const deleteMemberValidation = function(memberData) {
    if( !memberData.mobileNumber ){
        return constResponse.fieldMissingError;
    }
    if (memberData.mobileNumber.length !== 10  ) {
        return constResponse.mobileAndPasswordError;
    }
    return memberModel.deleteMember(memberData);
}


module.exports = {memberRegisterValidation , memberDetailValidation , updateMemberValidation , deleteMemberValidation}