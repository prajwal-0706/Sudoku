let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();

let port = process.env.PORT || 5000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
