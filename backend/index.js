import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import  express  from "express";
import hostelApplication from './routes/hostelApplication.js';

const app = express();
const url = "add you own mongo db url here";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected to the DB'));

app.listen(3000);

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/hostelApplicants', hostelApplication); 
app.use('/viewApplicants',hostelApplication);
app.use('/deleteApplicant',hostelApplication);
