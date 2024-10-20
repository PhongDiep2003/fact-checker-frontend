import clientPromise from "@/lib/mongodb";

export default async function create_post(req, res) {
    try {
        if(req.method !== 'POST') {
            return res.status(405).json({ success: false, user: null, message: 'Only POST Requests Are Allowed' });
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('factchecker_db'); 

        console.log(req.body);

        // const newPost = await Post.create({

        // })

        res.status(201).json({
            success: true, 
            message: 'Post created successfully', 
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, user: null, message: 'Error fetching post', error });
    }
}