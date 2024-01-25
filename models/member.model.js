const { dbConstants } = require("../constants/db.constants");
const constResponse = require("../constants/cons.response");
const { connecToDb } = require("../models/db.model");

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
      return constResponse.dataMissingError;
    }
  } catch (error) {
    console.error("data missing error", error);
    return constResponse.internalServerError;
  }
};

const updateMember = async (updateMember) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.membersCollection);
    const updateData = await dbCollection.findOneAndUpdate(
      { mobileNumber: updateMember.mobileNumber },
      { $set: updateMember },
      { returnDocument: "after" }
    );
    return updateData;
  } catch (error) {
    console.error("data is not update", error);
    return constResponse.internalServerError;
  }
};

const deleteMember = async (deleteData) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.membersCollection);
    const deleteMember = await dbCollection.findOneAndDelete(
      { mobileNumber: deleteData.mobileNumber },
      { returnDocument: "after" }
    );
    return deleteMember;
  } catch (error) {
    console.error("Member data is not delete", error);
    return constResponse.internalServerError;
  }
};

module.exports = { registerMember, getMembersData, updateMember, deleteMember };
