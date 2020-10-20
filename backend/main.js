require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 8800;

server.listen(PORT, () => console.log(`API is running on localhost:${PORT}`));