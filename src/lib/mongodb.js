import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string

if (!uri) {
  console.error('Please define the MONGODB_URI environment variable');
  process.exit(1);
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose.connect(uri, opts).then(mongoose => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export { connectToDatabase };