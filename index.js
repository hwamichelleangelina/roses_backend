const app = require('./app');

const routerUser = require('./routes/auth');
const routerMessage = require('./routes/message');
const routerRose = require('./routes/rose');

// Setup route-specific middlewares or routes
app.use('/auth', routerUser);
app.use('/messages', routerMessage);
app.use('/roses', routerRose);

app.get('/', async (req, res) => {
    res.json({ message: 'This is Ehthereal BlossomBox API!' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Exporting app is usually not necessary unless it's for testing purposes
module.exports = app;