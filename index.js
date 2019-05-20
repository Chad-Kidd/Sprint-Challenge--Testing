require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 1000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

//port up and running