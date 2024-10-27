import mongoose from 'mongoose';

export async function connectToMongoDb(url) {
    await mongoose.connect(url);
}
