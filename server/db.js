import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB : ${connect.connection.host}`);
  }
  catch (error) {
    console.error(`Error connecting to MongoDB:', ${error.message}`);
  }
};

export default connectToDatabase;
