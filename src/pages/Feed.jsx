import React, { useState } from "react";
import { useAtom } from "jotai";
import { postAtom } from "../utils/globalstate";
import './Feed.css';

function Post({ text }) {
    return (
        <div className="post">
            <p>{text}</p>
        </div>
    );
}

function PostForm() {
    const [content, setContent] = useState('');
    const [posts, setPosts] = useAtom(postAtom);

    const handlePost = () => {
        if (content.trim()) {
            setPosts(prevPosts => [...prevPosts, content]);
            setContent('');
        }
    };

    return (
        <div className="post-form">
            <textarea
                placeholder="What's on your mind?"
                value={content}
                onChange={e => setContent(e.target.value)}
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
            {posts.map((text, index) => (
                <Post key={index} text={text} />
            ))}
        </div>
    );
}


export default Feed;
