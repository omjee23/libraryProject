const {dbConstants} = require('../constants/db.constants');
const constResponse = require('../constants/cons.response');
const db = require('../models/db.model');


const issueBook = async (bookDetail) => {
    try {
        const dbconn = await db.connecToDb()
        const dbCollection = dbconn.collection(dbConstants.bookCollection)
        const issueCollection = dbconn.collection(dbConstants.issueBookCollection)
        const returnBookCollection = dbconn.collection(dbConstants.returnBookCollection)
        const issueBookInfo = await issueCollection.findOne({"bookId":bookDetail.bookId})
        if(!issueBookInfo){
            const update = {$set :{status : "issued"}}
            const result = await dbCollection.updateOne({"bookId":bookDetail.bookId}, update)
            const delteSumbitBook = await returnBookCollection.deleteOne({"bookId":bookDetail.bookId})
            const issueBook = await issueCollection.insertOne(bookDetail)
            return constResponse.bookIssue;
        }
        else if(issueBookInfo) {
            return constResponse.issueBookExist
        }
        else{
            return constResponse.dataMissingError;
        }
    } catch (error) {
        console.error("issued book error",error);
        return constResponse.internalServerError
    }   
} 

const returnIssueBook = async (returnBookDetails) => {
    try {
        const dbconn = await db.connecToDb()
        const returnIssueBook = dbconn.collection(dbConstants.returnBookCollection);
        const dbCollection = dbconn.collection(dbConstants.bookCollection)
        const issueBook = dbconn.collection(dbConstants.issueBookCollection)
        const returnBook = await returnIssueBook.findOne({"bookId" : returnBookDetails.bookId})
        if (!returnBook) {
            const update = {$set : { status :"avialable"}}
            const result  = await dbCollection.updateOne({"bookId": returnBookDetails.bookId}, update)
            const deleteIssueBook = await issueBook.deleteOne({"bookId":returnBookDetails.bookId})
            const returnBook = await returnIssueBook.insertOne(returnBookDetails)
            return constResponse.returnIssueBook;
        }
        else if (returnBook){
            return constResponse.returnBookExist
        }
        else {
            return constResponse.dataMissingError
        } 
    } catch (error) {
        console.error("return book error",error);
        return constResponse.internalServerError
        
    }
}

module.exports = {issueBook , returnIssueBook}