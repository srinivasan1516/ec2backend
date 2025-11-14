const express = require('express');
const app = express();
const port = 5000;

// example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!', time: new Date().toISOString() });
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Backend listening on http://127.0.0.1:${port}`);
});
