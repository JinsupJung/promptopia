// import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb';


let isConnected = false; // track the connection

export const connectToDB = async () => {
  console.log('connectToDB');

  // const client = await MongoClient.connect(
  //   "mongodb+srv://Flome:M!B63up-4i5L3BU@cluster0.db6lj76.mongodb.net/?retryWrites=true&w=majority"
  // );
  // const db = client.db();

  // const meetupsCollection = db.collection('promptopia');

  // mongoose.set('strictQuery', true);

  // if(isConnected) {
  //   console.log('MongoDB is already connected');
  //   return;
  // }

  // try {
  //   await mongoose.connect(process.env.MONGODB_URI, {
  //     dbName: "share_prompt",
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })

  //   isConnected = true;

  //   console.log('MongoDB connected')
  // } catch (error) {
  //   console.log(error);
  // }
}