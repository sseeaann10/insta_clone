import React, { useState } from "react";
import { useAtom } from "jotai";
import { postAtom } from "../utils/globalstate";
import './Feed.css';

function Post({ text, image }) {
    return (
        <div className="post">
            <p>{text}</p>
            {image && <img src={image} alt="post" />}
        </div>
    );
}


function PostForm() {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); // New state for the image
    const [posts, setPosts] = useAtom(postAtom);

    const handlePost = () => {
        if (content.trim() || image) {
            const newPost = {
                text: content,
                imageUrl: image ? URL.createObjectURL(image) : null
            };
            setPosts(prevPosts => [...prevPosts, newPost]);
            setContent('');
            setImage(null); // Clear the image after posting
        }
    };

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    return (
        <div className="post-form">
            <textarea
                placeholder="What's on your mind?"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <button onClick={handlePost}>Post</button>
        </div>
    );
}


function Feed() {
    const [posts] = useAtom(postAtom);

    return (
        <div className="feed">
            <h1>Posts</h1>
            <PostForm />
            {posts.map((post, index) => (
                <Post key={index} text={post.text} image={post.imageUrl} />
            ))}
        </div>
    );
}



export default Feed;
