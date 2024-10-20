import clientPromise from "@/lib/mongodb";

export default async function create_post(req, res) {
    try {
        if(req.method !== 'POST') {
            return res.status(405).json({ success: false, user: null, message: 'Only POST Requests Are Allowed' });
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('factchecker_db'); 
        
        const {data} = req.body;

        const result = await db.collection('posts').insertOne({ email, password });

        res.status(201).json({ success: true, post: result, message: 'Post Created Successfully' });
       
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, user: null, message: 'Error fetching post', error });
    }
}