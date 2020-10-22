const express = require('express');
const faker = require('faker');
const cors = require('cors');
const port = process.env.PORT || 8081;

const initData = () => [...Array(100).keys()].map(id => ({
  id,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  date: faker.date.past(),
  phone: faker.phone.phoneNumber(),
  account: faker.finance.account(),
  accountName: faker.finance.accountName()
}));

let data = initData();

const getUsers = () => data.map(({id, firstName, lastName, date, phone}) => ({id, firstName, lastName, date, phone}));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/reset', (req, res) => data = initData() && res.json({success: true}));
app.get('/users', (req, res) => res.json(getUsers()));
app.get('/users/:id', (req, res) => res.json(data.find(item => item.id.toString() === req.params.id)));
app.post('/login', (req, res) => res.json({token: Math.random().toString(36).substr(2, 9)}));
app.post('/users/:id', (req, res) => {
  const index = data.findIndex(item => item.id.toString() === req.params.id);
  if (index === -1) {
    return res.status(400);
  }
  data[index] = {...data[index], ...req.body};
  return res.json(data[index]);
});

app.listen(port, () => console.log(`server listening on port ${port}!`));
