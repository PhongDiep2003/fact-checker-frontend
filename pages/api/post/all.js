import clientPromise from "@/lib/mongodb";

export default async function post_view(req, res) {
    try {
        if(req.method !== 'GET') {
            return res.status(405).json({ success: false, user: null, message: 'Only GET Requests Are Allowed' });
        }
        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('factchecker_db'); 

        // Check if posts exists
        const existingPost = await db.collection('posts').find({}).sort({likes: -1}).toArray();
        if(!existingPost)
        {
            return res.status(500).json({ success: false, user: null, message: 'No posts exist'});
        }

        // Get post details
        const data = existingPost

        res.status(200).json({data});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, user: null, message: 'Error fetching post', error });
    }
}