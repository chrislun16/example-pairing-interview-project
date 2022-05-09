import express from 'express';
import path, { dirname, join } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Low, JSONFile } from 'lowdb';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

// set up lowdb
const __dirname = dirname(fileURLToPath(import.meta.url));
const dbFile = join(__dirname, '../db.json');
const dbAdapter = new JSONFile(dbFile);
const db = new Low(dbAdapter);

await db.read();

if (!db.data) {
  db.data = { users: [] };
}

const app = express();

app.use(cors());

// set up express to serve JSON
app.use(express.json());
// set up express to serve static files
app.use(express.static(join(__dirname, '/../client/')));


// get a user by username
// GET /user/:username
app.get('/user/:username', async (request, response) => {
  const { username } = request.params;

  // search the database for a user with matching username
  const user = db.data.users.find(user => user.username === username);

  // if no user is found, respond with 404 not found and a message
  if (!user) {
    response.status(404).json({ message: 'user not found' });
    return;
  }

  // respond with the user 
  response.json({ user });
  return;
});

// create a new user
// POST /user
app.post('/user', async (request, response) => {
  const { body: { username } } = request;

  // username is a required field
  // if the username field is missing, respond with 400 bad request and a message
  if (!username) {
    response.status(400).json({ message: 'username is required' });
    return;
  }

  // username must be unique
  // check the database for an existing user with the provided username
  const existingUser = db.data.users.find((user) => { user.username === username });

  // if the provided username is already in use, respond with 400 bad request and a message
  if (existingUser) {
    response.status(400).json({ message: 'username not available' });
    return;
  }

  // create a new user in the database from the request body
  const newUser = { id: uuidv4(), username };
  db.data.users.push(newUser);
  await db.write();

  // respond with the newly created user
  response.json({ user: newUser })
  return;
})

// serve our react client
app.get('/', (req, res) => {
  const resolvedPath = path.resolve('./client' + req.url);

  fs.stat(resolvedPath, (err, stats) => {
    if (!err && stats.isFile()) {
      res.sendFile(resolvedPath);
      return;
    } else {
      res.sendFile('index.html');
      return;
    }
  })
});

// listen for requests
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('app is listening on port', listener.address().port)
});
