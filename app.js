const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(`THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED
WITH AWS. THIS PAGE INDICATES SUCCESS.
YOURNAME: DAVID OLUWATAYO DAMILOLA 
MATRIC NUMBER: VUG\ CSC\ 21 \ 6100`));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
