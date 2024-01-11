const {dbConstants} = require('../constants/db.constants');
const constResponse = require('../constants/cons.response');
const {connecToDb} = require('../models/db.model');

const booksRegister = async (bookDetail)=> {
    try {
        const dbconn = await connecToDb();
        const dbCollection = dbconn.collection(dbConstants.bookCollection)
        const bookRegisterData = await dbCollection.findOne({"bookId" : bookDetail.bookId })
        if (bookRegisterData){
            return constResponse.registerBookExist;
        }
        else{
            await dbCollection.insertOne(bookDetail)
            return constResponse.registerMessage;
        }
    } catch (error) {
        console.error("registration error :",error)
        return constResponse.internalServerError;
        
    }
}

const getRegisteredBook = async () => {
    try {
       const dbconn = await connecToDb();
       const dbCollection = dbconn.collection(dbConstants.bookCollection)
       const bookData = await dbCollection.find({}).toArray();
       if (bookData){
        return bookData
       }
       else {
        return constResponse.fieldMissingError
       }
    } catch (error) {
        console.error("book data missing error",error);
        return constResponse.internalServerError
    }
}

const updateBookData = async ( bookData ) => {
    try {
        const dbconn = await connecToDb();
        const dbCollection = dbconn.collection(dbConstants.bookCollection);
        const updateBook =  await dbCollection.findOneAndUpdate({"bookId": bookData.bookId },{$set:bookData},{returnDocument : "after"})
        return updateBook ;
    } catch (error) {
        console.error("Error updating book data :",error);
        return constResponse.internalServerError
        
    }
};

const deleteBookData = async (bookData) => {
    try {
        const dbconn = await connecToDb();
        const dbCollection = dbconn.collection(dbConstants.bookCollection);
        const deleteBook = await dbCollection.deleteOne({"bookId" : parseInt(bookData)});
        return constResponse.deleteBook ;
    } catch (error) {
        console.error("book data is not delete",error);
        return constResponse.internalServerError
    }
}


module.exports = {booksRegister , getRegisteredBook , updateBookData , deleteBookData}