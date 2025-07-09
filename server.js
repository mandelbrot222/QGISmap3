const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({limit: '5mb'}));
app.use(express.static(__dirname));

app.post('/save', (req, res) => {
  fs.writeFile(path.join(__dirname, 'spaces.geojson'), JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error('Error saving file:', err);
      res.status(500).send('Failed to save');
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
