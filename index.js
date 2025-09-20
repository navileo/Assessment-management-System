const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const authController = require('./authController');
const reportController = require('./reportController');
console.log('reportController:', reportController);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('PDF Report Generation System Backend');
});

app.post('/register', authController.register);
app.post('/login', authController.login);
console.log('Registering /generate-report route');
app.get('/generate-report', reportController.generateReport);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});