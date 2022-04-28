const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look mama! I can code with node now');
});

const users = [
    { id: 1, name: 'Abdul', email: 'abdul@gmail.com', phone: '01779121232' },
    { id: 2, name: 'Babul', email: 'babul@gmail.com', phone: '01779121232' },
    { id: 3, name: 'cabul', email: 'cabul@gmail.com', phone: '01779121232' },
    { id: 4, name: 'sabul', email: 'sabul@gmail.com', phone: '01779121232' },
    { id: 5, name: 'nabul', email: 'nabul@gmail.com', phone: '01779121232' },
    { id: 6, name: 'jabul', email: 'jabul@gmail.com', phone: '01779121232' },
    { id: 7, name: 'mamul', email: 'mamul@gmail.com', phone: '01779121232' }
];

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send('[mango, banana, oranges]')
});

app.listen(port, () => {
    console.log('Listening now', port)
});