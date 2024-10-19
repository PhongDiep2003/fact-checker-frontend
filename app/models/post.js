const mongoose = require('mongoose');

// Define the Comment schema
const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define the Claim schema with up to 3 sources
const claimSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxlength: 300 // Limit to 300 characters per claim
    },
    sources: {
        type: [
            {
                url: { type: String, required: true }, // Source URL
                description: { type: String, maxlength: 200 } // Optional description of the source
            }
        ],
        validate: [arrayLimit, '{PATH} exceeds the limit of 3 sources'] // Validate max 3 sources per claim
    }
});

// Custom validator to limit the number of sources to 3
function arrayLimit(val) {
    return val.length <= 3;
}

// Define the Post schema
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        maxlength: 100 // Limit to 100 characters
    },
    content: {
        type: String,
        required: true,
        maxlength: 500 // Limit to 500 characters
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    rating: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema], // Array of comments
    claims: [claimSchema] // Array of claims, each with up to 3 sources
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
