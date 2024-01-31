const { dbConstants } = require("../constants/db.constants");
const constResponse = require("../constants/cons.response");
const { connecToDb } = require("../models/db.model");
const { ObjectId } = require('mongodb');

const registerMember = async (memberDetail) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.membersCollection);
    const registerData = await dbCollection.findOne({
      mobileNumber: memberDetail.mobileNumber,
    });
    if (registerData) {
      return constResponse.registerExists;
    } else {
      await dbCollection.insertOne(memberDetail);
      return constResponse.registerMessage;
    }
  } catch (error) {
    console.error("registration error: ", error);
    return constResponse.internalServerError;
  }
};

const getMembersData = async () => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.membersCollection);
    const registerData = await dbCollection.find({}).toArray();
    if (registerData) {
      return registerData;
    } else {
      return constResponse.memberNotExist;
    }
  } catch (error) {
    console.error("data missing error", error);
    return constResponse.internalServerError;
  }
};

const updateMember = async (updateMember , memberId) => {
  try {
    console.log(updateMember ,"babujnjdn" , memberId);
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.membersCollection);
    const updateData = await dbCollection.findOneAndUpdate(
      { _id : new ObjectId(memberId) },
      { $set: {fullName : updateMember.fullName} },
      { returnDocument: "after" }
    );
    console.log(updateData , "ramam rate rate");
    return constResponse.updateMemberData;
  } catch (error) {
    console.error("data is not update", error);
    return constResponse.internalServerError;
  }
};

const deleteMember = async ( memberId) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.membersCollection);
    const deleteMember = await dbCollection.findOneAndDelete(
      {_id : new ObjectId(memberId) },
      { returnDocument: "after" }
    );
    return constResponse.deleteMemberData;
  } catch (error) {
    console.error("Member data is not delete", error);
    return constResponse.internalServerError;
  }
};

module.exports = { registerMember, getMembersData, updateMember, deleteMember };
