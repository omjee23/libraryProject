const express = require('express');
const router = require('./routes/health.route')
const members = require('./routes/member.route');
const books = require('./routes/books.route');
const issueBook = require('./routes/issue.route');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router)
app.use('/', members)
app.use('/',books)
app.use('/', issueBook);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
