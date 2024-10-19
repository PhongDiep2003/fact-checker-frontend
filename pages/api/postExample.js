const mongoose = require('mongoose');
const Post = require('../../app/models/post'); // Import your Post model

// Create a new post with claims, sources, and comments
const newPost = new Post({
    userId: '64ea1b5f9c0b1e40ac3f9c23', // Replace with valid userId
    title: 'Understanding the Effects of Global Warming',
    content: 'This post explores various claims about global warming.',
    postId: '64ea1b5f9c0b1e40ac3f9c24', // Self-reference example
    claims: [
        {
            text: 'Sea levels are rising at an unprecedented rate.',
            sources: [
                { url: 'https://example.com/sea-levels', description: 'Sea level data' },
                { url: 'https://example.com/climate-report', description: 'Climate report 2023' }
            ]
        },
        {
            text: 'Heatwaves are becoming more frequent.',
            sources: [
                { url: 'https://example.com/heatwaves', description: 'Heatwave statistics' }
            ]
        }
    ],
    comments: [
        {
            userId: '64ea1b5f9c0b1e40ac3f9c25', // Replace with valid userId
            content: 'Great post! Very informative.'
        },
        {
            userId: '64ea1b5f9c0b1e40ac3f9c26', // Replace with valid userId
            content: 'I agree with the points made on heatwaves.'
        }
    ]
});

// Save the post to the database
newPost.save()
    .then(post => {
        console.log('Post created successfully:', post);
        mongoose.connection.close(); // Close the connection after saving
    })
    .catch(err => {
        console.error('Error creating post:', err);
        mongoose.connection.close(); // Close the connection in case of an error
    });
