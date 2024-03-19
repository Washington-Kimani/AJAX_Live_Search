import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectToDB = () =>{
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection;
    db.on('error', error => console.log(error));
    db.once('open', () => { console.log('Connected to Database') });
}


export  default connectToDB; 