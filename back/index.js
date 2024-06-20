const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const {router} = require('./routes/UserRoute')
const {routerBook} = require("./routes/BookR");
const {routerPinjam} = require("./routes/PinjamM");

app.use(cors());
app.use(express.json());
app.use(router)
app.use(routerBook)
app.use( routerPinjam)
app.listen(port, () => {
	console.log(`running on port ${port}`);
});