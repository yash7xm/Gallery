import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';

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
app.use(cookieParser());
app.use(cors());

let sessionId = '';


app.post('/signUp', async (req, res) => {
    console.log(req.body);


    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hash
    })

    const userId = user._id;
    
    res.cookie('userId', userId, { maxAge: 30 * 24 * 60 * 60 * 1000 });
    sessionId = res.cookie.userId;

    await user.save();
    res.sendStatus(200);
})

app.post('/signIn', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if(user === null) res.sendStatus(400);
    else {
        const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(validPassword) {
        const userId = user._id;
        res.cookie('userId', userId, { maxAge: 30 * 24 * 60 * 60 * 1000 });
        sessionId = res.cookie.userId;
        res.sendStatus(200);
    }
    else res.sendStatus(400);
    }
})

app.get('/users', async(req, res) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





