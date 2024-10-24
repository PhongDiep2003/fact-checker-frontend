import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function post_view(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({
        success: false,
        user: null,
        message: "Only GET Requests Are Allowed",
      });
    }
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("factchecker_db");

    let { id } = req.query;
    id = new ObjectId(id);
    // Check if posts exists
    const existingPost = await db.collection("posts").findOne({ _id: id });
    res.status(200).json({
      success: true,
      user: null,
      message: "Post fetched successfully",
      data: existingPost,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      user: null,
      message: "Error fetching post: ",
      error,
    });
  }
}
