import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8080;

mongoose.connect(process.env.MONGO_PROD_URL)
    .then(() => console.log('connected db'));


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'password cannot be blank']
    },
})

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());
app.use(cors());


app.post('/logIn', async (req, res) => {
    console.log(req.body);


    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hash
    })

    await user.save();
    res.sendStatus(200);
})

app.get('/users', async(req, res) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





