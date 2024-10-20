import clientPromise from "@/lib/mongodb";

export default async function postComment(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Only POST Requests Are Allowed' });
    }

    const client = await clientPromise;
    const db = client.db('factchecker_db');
    
    const { postId, userId, content } = req.body;

    if (!postId || !userId || !content) {
      return res.status(400).json({ success: false, message: 'Missing required fields: postId, userId, or content' });
    }

    const newComment = {
      userId,
      content,
      createdAt: new Date().toISOString()
    };

    const result = await db.collection('posts').updateOne(
      { postId: postId }, 
      { $push: { comments: newComment } }, 
      { upsert: false }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    res.status(200).json({ success: true, comment: newComment, message: 'Comment Created Successfully' });
  } catch (error) { 
    console.error('Error Creating Comment:', error);
    res.status(500).json({ success: false, user: null, message: 'Error Creating Comment: ', error });
  }
}