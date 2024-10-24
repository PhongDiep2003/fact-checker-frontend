import clientPromise from "@/lib/mongodb";

export default async function signup(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        user: null,
        message: "Only POST Requests Are Allowed",
      });
    }
    const client = await clientPromise;
    const db = client.db("factchecker_db");

    // Extract the data
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ success: false, user: null, message: "User Already Exists" });
    }

    // Insert the new user
    const result = await db.collection("users").insertOne({ email, password });
    res.status(200).json({
      success: true,
      user: result,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error("Error Signing Up:", error);
    res.status(500).json({
      success: false,
      user: null,
      message: "Error Signing Up: ",
      error,
    });
  }
}
