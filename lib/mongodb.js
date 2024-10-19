// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL; 
let client
let clientPromise

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so the MongoClient isn't recreated on every hot reload
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
