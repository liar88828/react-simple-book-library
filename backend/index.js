const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const {router}=require('./routes/UserRoute')
app.use(cors());
app.use(express.json());
app.use(router)
app.listen(port, () => {
	console.log(`running on port ${port}`);
});