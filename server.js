const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 300;

// Connect to MongoDB
mongoose.connect('mongodb+srv://smoothoperators:CVFCAjeKjrDZlC3e@alumniconnect.sk0eb.mongodb.net/?retryWrites=true&w=majority&appName=alumniconnect', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  emailID: String,
  password: String,
  selectRole: String
});

const User = mongoose.model('User', userSchema);

app.post('/login', (req, res) => {
  const { emailID, password, selectRole } = req.body;

  // Validate input data here

  const newUser = new User({
    emailID,
    password,
    selectRole
  });

  newUser.save()
    .then(user => {
      console.log('User saved successfully:', user);
      res.json({ message: 'User created successfully' });
    })
    .catch(err => {
      console.error('Error saving user:', err);
      res.status(500).json({ error: 'Error saving user' });
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});