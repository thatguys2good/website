const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/api/data', (req, res) => {
  res.json({ message: 'backend' });
});
app.listen(PORT, () => {
  console.log(`running on localhost port 3000 heh fein`);
});
