const conResponse = {
    registerExists :{
        success : false,
        errorCode : 409,
        message : "user with the same email or username already exists."
    },
    registerMessage: {
        success: true,
        statusCode: 201,
        message: "Registration successfull"
    },
    internalServerError: {
        success: "false",
        errorCode: 500,
        message: "Interval server error. We are looking into this."
    },
    fieldMissingError: {
        success: false,
        errorCode: 'PSE: 1001',
        message: 'required fields are missing'
    },
    mobileAndPasswordError: {
        success: false,
        errorCode: 400,
        message: "Mobile number shuold be 10 digit and password len should be 8 digit"
    },
    dataMissingError :{
        success : false,
        errorCode : 404,
        message : "data is not existing or missing"
    },
    registerBookExist:{
        success : false,
        errorCode : 409,
        message : "same books already exists."
    },
    bookIssue:{
        success : true,
        statusCode : 200 ,
        message : "Book issue successfully"
    },
    bookNotAvailable :{
        success : false,
        statusCode : 404,
        message : "book not available"
    },
    issueBookExist:{
        success : false,
        errorCode : 409,
        message : "same books already issued"
    },
    returnIssueBook : {
        success : true,
        statusCode : 200,
        message : "Book submitted successfully"
    },
    returnBookExist:{
        success : false,
        errorCode : 409,
        message : "same books already submitted"
    },
    deleteBook :{
        success : true ,
        statusCode : 200 ,
        message : "Book deleted successfully"
    }

}

module.exports = conResponse;