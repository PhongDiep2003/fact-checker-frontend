import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function post_view(req, res) {
    try {
        if(req.method !== 'GET') {
            return res.status(405).json({ success: false, user: null, message: 'Only GET Requests Are Allowed' });
        }
        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('factchecker_db'); 

        const { id } = req.query;
        console.log("POST_ID: " + id);

        // Check if posts exists
        const existingPost = await db.collection('posts').findOne({ postId: id });
        if(!existingPost)
        {
            return res.status(500).json({ success: false, user: null, message: 'Post \'' + id + '\' does not exist'});
        }

        // Get post details
        const data = {
            ...existingPost
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, user: null, message: 'Error fetching post: ', error });
      }
}