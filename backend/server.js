const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/products');

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Backend API</title>
      </head>
      <body>
        <h1>Welcome to the Backend Server</h1>
      </body>
    </html>
  `);
});


app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});