import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';



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

let sessionId = '';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Gallery',
      allowedFormats: ['jpeg', 'png', 'jpg']
    },
  });

app.post('/signUp', async (req, res) => {
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

app.post('/signIn', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if(user === null) res.sendStatus(400);
    else {
        const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(validPassword) {
        res.sendStatus(200);
    }
    else res.sendStatus(400);
    }
})

app.post('/checkUser', async (req, res) => {
    const checkUser = await User.findOne({ username: req.body.username });
    if(checkUser) res.sendStatus(404);
    else res.sendStatus(200);
})


app.get('/logOut', (req,res) => {
    Cookies.remove('username');
    res.sendStatus(200);
})

app.get('/users', async(req, res) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})


const upload = multer({ storage })

app.post('/uploadImage', upload.single('imageFile'), async(req, res) => {
    console.log(req.file.path);
    console.log(req.body.title);
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





