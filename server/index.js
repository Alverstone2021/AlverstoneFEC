const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.end();
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});