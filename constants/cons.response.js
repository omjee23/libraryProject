const conResponse = {
    registerExists :{
        success : false,
        statusCode : 409,
        message : "User with the same mobile number already exists."
    },
    registerMessage: {
        success: true,
        statusCode: 200,
        message: "Registration successfull"
    },
    internalServerError: {
        success: "false",
        statusCode: 500,
        message: "Interval server error. We are looking into this."
    },
    fieldMissingError: {
        success: false,
        statusCode: 'PSE: 1001',
        message: 'Required fields are missing'
    },
    mobileAndPasswordError: {
        success: false,
        statusCode: 400,
        message: "Mobile number shuold be 10 digit and password length should be 8 digit"
    },
    dataMissingError :{
        success : false,
        statusCode : 404,
        message : "Data is not existing or missing"
    },
    registerBookExist:{
        success : false,
        statusCode : 409,
        message : "Same books already exists."
    },
    bookIssue:{
        success : true,
        statusCode : 200 ,
        message : "Book issue successfully"
    },
    bookNotAvailable :{
        success : false,
        statusCode : 404,
        message : "Book not available"
    },
    issueBookExist:{
        success : false,
        statusCode : 409,
        message : "Same books already issued"
    },
    returnIssueBook : {
        success : true,
        statusCode : 200,
        message : "Book submitted successfully"
    },
    returnBookExist:{
        success : false,
        statusCode : 409,
        message : "Same books already submitted"
    },
    deleteBook :{
        success : true ,
        statusCode : 200 ,
        message : "Book deleted successfully"
    },
    bookNotExist :{
        success : false ,
        statusCode : 404,
        message : "Book not found"
    },
    returnBookError :{
        success : false ,
        statusCode : 404,
        message : "No member should be retuned"
    },
    issueBookError :{
        success : false ,
        statusCode : 404,
        message : "No member should be issued any book"
    },
    bookUpdateSuccess :{
        success : true ,
        statusCode : 200,
        message : "Book updated successfully"
    },
    updateMemberData : {
        success : true ,
        statusCode : 200,
        message : "Member updated successfully"
    },
    deleteMemberData : {
        success : true ,
        statusCode : 200,
        message : "Member deleted successfully"
    },
    memberNotExist :{
        success : false ,
        statusCode : 404,
        message : "No User response "
    }

}

module.exports = conResponse;