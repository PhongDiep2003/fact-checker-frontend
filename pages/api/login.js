import clientPromise from "@/lib/mongodb";

export default async function login(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, user: null, message: 'Only POST Requests Are Allowed' });
    }
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('factchecker_db'); 
    
    // Extract the data
    const { email, password} = req.body;

  
    const existingUser = await db.collection('users').findOne({ email, password });
    if (existingUser) {
      return res.status(200).json({ success: true, user: existingUser, message: 'Login Successfully' });
    }
    res.status(200).json({ success: false, user: null, message: 'User Not Found' });
  } catch (error) {
    console.error('Error Logging In', error);
    res.status(500).json({ success: false, user: null,  message: 'Error Logging In: ', error });
  }
}