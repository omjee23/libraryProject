const dbConstants = {
    dbName: "LibraryData",
    uri: "mongodb://localhost:27017",
    membersCollection : "members",
    bookCollection : "books",
    issueBookCollection : "issuesBook",
    returnBookCollection : "returnBook",
}

module.exports = {dbConstants}