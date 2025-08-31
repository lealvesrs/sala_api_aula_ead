const express = require('express'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

const routerApp = require('./routes/route.js'); 
app.use('/api/salas', routerApp);

app.get('/', (req, res) => {
  res.send('Hello DW3!');
});

app.listen(port, () => {
  console.log('Executando a aplicação:', process.env.APP_NAME);
  console.log(`Servidor rodando em http://localhost:${port}`);
});
