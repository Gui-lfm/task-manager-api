const app = require('./app');

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => console.log(`ouvindo porta ${port}`));
