import mongoose from 'mongoose';


// so one default connection via mongoose.connect() is all we need.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_COSMETICS_URI);
    console.log(`MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB error: ${err}`);
});

export { connectDB };
