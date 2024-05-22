const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('NEW - Hello from Express Updated v2!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express API Updated!' });
});

